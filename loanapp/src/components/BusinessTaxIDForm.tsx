import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const BusinessTaxIDForm: React.FC = () => {
  const {businessTaxID,setBusinessTaxID} = useContext(DataContext)

  const handleEINChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessTaxID(event.target.value);
  };

  // const handleAuthorizationClick = (isAuthorized: boolean) => {
  //   setIsAuthorizedOwner(isAuthorized);
  // };
  const verifyForm= ()=>{
    if(!businessTaxID){
      return {
        isValid:false,
        message:"please add ssn number",
      }
    }
    if(businessTaxID.trim().length < 3){
      return{
        isValid:false,
        message:"your business tax ID should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }

  return (
    <>
    <div>
      <h2 className="mb-8">What's your Business Tax ID (EIN)?</h2>
      <div className="wrapper-81z">
        <label htmlFor="ein" className="text-lg my font-bold">EIN</label>
        <input
          type="text"
          id="ein"
          name="ein"
          placeholder="00-0000000"
          value={businessTaxID}
          style={{color:"black",textAlign:"left",padding:"8px"}}
          onChange={handleEINChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-3k7"></span>
        <div className="dis-y6i my-3" style={{textAlign:"left"}}>
          If you're a sole proprietor and your SSN is your TaxID, please select the  button.
        </div>
        {/* <div style={{ display: 'flex',gap:"4px" }}>
            <button
              className={`button-yvf p-4 rounded-md text-xl ${isAuthorizedOwner ? 'bg-yellow-500' : 'bg-white'}`}
              onClick={() => handleAuthorizationClick(true)}
            >
              Yes
            </button>
            &nbsp;
            <button
              className={`button-yvf p-4 rounded-md text-xl ${!isAuthorizedOwner ? 'bg-yellow-500' : 'bg-white'}`}
              onClick={() => handleAuthorizationClick(false)}
            >
              No
            </button>
            <input type="hidden" id="Ownership-manager" name="Ownership-manager" value={isAuthorizedOwner ? '1' : '0'} />
          </div> */}
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessTaxIDForm;
