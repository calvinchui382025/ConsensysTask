const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

let csvToJson = require('convert-csv-to-json')
app.use(express.static(path.join(__dirname, 'build')));



app.get('/information', (req, res) => {
  //----------------------------------------------------- Grabbing info from files and cleaning
  let jsonDeal = csvToJson.getJsonFromCsv("Deals.txt");
  let dealArr = [];
  for (let i = 0; i < jsonDeal.length; i++) {
    for (let key in jsonDeal[i]) {
      dealArr.push(jsonDeal[i][key])
    }
  }

  let jsonDealLines = csvToJson.getJsonFromCsv('DealLines.txt');
  let dealLinesArr = [];
  for (let i = 0; i < jsonDealLines.length; i++) {
    dealLinesArr.push(Object.values(jsonDealLines[i]));
  }

  let jsonDealCosts = csvToJson.getJsonFromCsv("DealCosts.txt");
  let dealCostsArr = [];
  for (let i = 0; i < jsonDealCosts.length; i++) {
    dealCostsArr.push(Object.values(jsonDealCosts[i]))
  }
  //------------------------------------------------------ further cleaning (Object.values() is limiting)
  for (let i = 0; i < dealCostsArr.length; i++) {
    dealCostsArr[i] = dealCostsArr[i][0].split(', ');
  }
  for (let i = 0; i < dealLinesArr.length; i++) {
    dealLinesArr[i] = dealLinesArr[i][0].split(', ')
  }
  for (let i = 0; i < dealArr.length; i++) {
    dealArr[i] = dealArr[i].split(', ');
  }
  //------------------------------------------------------ Push each Object into resultArr
  let resultArr = []

  dealCostsArr.forEach((item) => { //Pushing each dealCost into resultArr (this should always have the highest quantity)
    let temp = {
      'DealCostId': Number(item[0]),
      'DealLineId': Number(item[1]),
      'CostCode': item[2],
      'CostAmount': Number(item[3]).toFixed(2), //keeps trailing zeroes
      'CostCurrency': item[4]
    }
    resultArr.push(temp)
  })

  dealLinesArr.forEach((item) => {  //Matching dealLines with resultArr (matching 'DealLineId')
    resultArr.forEach((item2) => {
      if (item2['DealLineId'] === Number(item[0])) {
        item2['DealId'] = Number(item[1])
        item2['DealType'] = item[2]
        item2['CommodityCode'] = item[3]
        item2['ContractQty'] = Number(item[4])
        item2['Uom'] = item[5]
        item2['Price'] = Number(item[6])
        item2['LoadingPort'] = item[7]
        item2['DischargePort'] = item[8]
      }
    })
  })

  dealArr.forEach((item) => {     //Matching deal with resultArr (matching 'DealId')
    resultArr.forEach((item2) => {
      if (item2['DealId'] === Number(item[0])) {
        item2['TraderName'] = item[1]
        item2['IncoTerms'] = item[2]
        item2['DealDate'] = item[3]
        item2['DealStatus'] = item[4]
      }
    })
  })






  res.send(resultArr)
});

app.listen(process.env.PORT || 8080);