import React from 'react';
const Table = (props) => (
  <div>
    {/* <button onClick={() => { console.log(props.information) }}>Table Props</button> */}
    <div className="txn-table txn-ro">
      <h3 className="txn-data"> Trader</h3>
      <h3 className="txn-data"> Deal ID</h3>
      <h3 className="txn-data"> Inco Terms</h3>
      <h3 className="txn-data"> Deal Date</h3>
      <h3 className="txn-data"> Deal Status</h3>
      <h3 className="txn-data"> Deal Line ID</h3>
      <h3 className="txn-data"> Deal Type</h3>
      <h3 className="txn-data"> Commodity</h3>
      <h3 className="txn-data"> Contract #</h3>
      <h3 className="txn-data"> Uom</h3>
      <h3 className="txn-data"> Price</h3>
      <h3 className="txn-data"> Loading</h3>
      <h3 className="txn-data"> Discharge</h3>
      <h3 className="txn-data"> Deal Cost ID</h3>
      <h3 className="txn-data"> Cost Code</h3>
      <h3 className="txn-data"> Cost</h3>
      <h3 className="txn-data"> Currency</h3>
    </div>
    {props.information.map((item, index) =>
      <div key={index} className="txn-table txn-row">
        <h4 className="txn-data">{item['TraderName']}</h4>
        <h4 className="txn-data">{item['DealId']}</h4>
        <h4 className="txn-data">{item['IncoTerms']}</h4>
        <h4 className="txn-data">{item['DealDate']}</h4>
        <h4 className="txn-data">{item['DealStatus']}</h4>
        <h4 className="txn-data">{item['DealLineId']}</h4>
        <h4 className="txn-data">{item['DealType']}</h4>
        <h4 className="txn-data">{item['CommodityCode']}</h4>
        <h4 className="txn-data">{item['ContractQty']}</h4>
        <h4 className="txn-data">{item['Uom']}</h4>
        <h4 className="txn-data">{item['Price']}</h4>
        <h4 className="txn-data">{item['LoadingPort']}</h4>
        <h4 className="txn-data">{item['DischargePort']}</h4>
        <h4 className="txn-data">{item['DealCostId']}</h4>
        <h4 className="txn-data">{item['CostCode']}</h4>
        <h4 className="txn-data">{item['CostAmount']}</h4>
        <h4 className="txn-data">{item['CostCurrency']}</h4>
      </div>
    )}


  </div>
)
export default Table;