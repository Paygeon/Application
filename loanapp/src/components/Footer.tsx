import logo from "../logo-full-2.png"

interface FooterProps {
    className?: string; // Make className prop optional
  }

  const Footer: React.FC<FooterProps> = ({ className }) => {
    return <footer className={className}>
            <div className="max-w-5xl mx-auto text-sm sm:text-lg  sm:text-dark">
                <img src="https://images.ctfassets.net/ns4x1kunro08/6ZSL1rWEVELl8oO3XgdzL6/eb23348aef5b0f4bf540169d2ca5a734/AC_Logo.png" className="max-w-[140px] mx-auto" alt="Paygeon Footer Logo" />
                <div className="flex justify-center gap-4  my-8 mb-12">
                    <a href="https://affiniti.finance/terms-of-use/" className="border-r pr-4 border-black">Terms and Conditions</a>
                    <a href="https://affiniti.finance/privacy-policy/" className="border-r pr-4 border-black">Privacy Policy</a>
                    <a href="https://share.hsforms.com/1Av-gKfitSgStjnr90rUlfAoyz25?__hstc=120299671.bae93a3a5dab9916fe4efd10bc5b68e2.1714132001073.1714773296090.1714889015686.15&__hssc=120299671.1.1714889015686&__hsfp=3873906278" className="pr-4 ">Partner With Us</a>
                </div>
                <p>© 2024 – Aesthetics Card Inc.</p>
                <p className="my-4">Disclaimer: loan.aestheticscard.com strives to keep its information accurate and up to date. This information may be different than what you see when you visit a financial institution, service provider or specific product’s site. All financial products, shopping products and services are presented without warranty. When evaluating offers, please review the financial institutions Terms and Conditions. loan.aestheticscard.com is not affiliated with the Small Business Administration. Actual product offerings are the responsibility of the participating lenders with whom you are matched.</p>
                <p className="my-4">‡ The Paygeon Line of Credit is issued by partner banks. Applications are subject to credit approval. Rates, credit lines, and terms may vary based on your creditworthiness and are subject to change. Additional fees apply.</p>
                <p className="my-4">PPP loans are made by one or more approved U.S. Small Business Administration (SBA) lenders. Loan agreements will identify the issuing lender to small businesses at signing. Qualified applications will be submitted to the SBA as soon as possible. Aesthetics Card does not guarantee that applications will be processed and submitted before PPP funds are no longer available. Approval and loan forgiveness are subject to your availability to meet government-set eligibility requirements</p>
            <br/>
            <br />
            <p>------------------------------------------------------------</p>
            <br />
            </div>
            </footer>
}

export default Footer;