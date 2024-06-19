import { useContext} from 'react';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { DataContext } from './context/DataContext';
import forms from './constants/forms';
import AfterSubmitting from './components/AfterSubmitting';
import { ConfigProvider } from 'antd';
import Steps from './components/shared/Steps';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const {currentStep,isSubmitted,previousStep} = useContext(DataContext)

  if(isSubmitted) return <AfterSubmitting/>;
  return (
      <ConfigProvider
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary: "gold",
        },
      }}
    >
      <Header/>
      <div className="hidden sm:block sticky top-0 ">
       <Steps/>
      </div>
      <div className="max-w-5xl p-4 mx-auto">
      {currentStep > 0 && (
          <div className="my-2">
            <button onClick={previousStep}><i className="bi bi-arrow-left text-3xl"></i></button>
          </div>
        )}
        <div className="mt-6">
        {forms[currentStep]}
      </div>
    </div>
    <Footer/>
    </ConfigProvider>
    
  );
};

export default App;
