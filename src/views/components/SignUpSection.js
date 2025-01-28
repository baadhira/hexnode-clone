// import React, { useState } from 'react';
// import '../styles/SignUpSection.css';

// const SignupSection = () => {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Add your signup logic here
//     console.log('Submitted email:', email);
    
//     // Simulating an async operation
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <section className="signup-section">
//       <div className="signup-absolute-placeholder"></div>
//       <div className="signup-container">
//         <div className="signup-header">
//           <h3>Sign up and try Hexnode free for 14 days!</h3>
//         </div>
//         <div className="signup-form-wrapper">
//           <form onSubmit={handleSubmit} className="signup-form">
//             <div className="form-row">
//               <div className="email-input-container">
//                 <input 
//                   type="email" 
//                   name="email" 
//                   id="email" 
//                   placeholder="Your Work Email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   className="email-input"
//                   required
//                 />
//               </div>
//               <div className="submit-button-container">
//                 <button 
//                   type="submit" 
//                   className="submit-button"
//                   disabled={isLoading}
//                 >
//                   <span>{isLoading ? 'Processing...' : 'Get Started'}</span>
//                   {isLoading && (
//                     <span className="loading-icon">
//                       <svg 
//                         stroke="currentColor" 
//                         fill="currentColor" 
//                         strokeWidth="0" 
//                         version="1.1" 
//                         viewBox="0 0 16 16" 
//                         height="1em" 
//                         width="1em" 
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"></path>
//                       </svg>
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="signup-footer">
//           <span className="error-message"></span>
//           <p className="footer-text">
//             No credit cards required.
//             <a 
//               href="https://www.hexnode.com/mobile-device-management/request-demo/" 
//               className="demo-link"
//             >
//               Request a demo
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignupSection;
import React, { useState } from 'react';
import '../styles/SignUpSection.css';

const SignupSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-header">
          <h3>Sign up and try Hexnode free for 14 days!</h3>
        </div>
        <div className="signup-form-wrapper">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-row">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Your Work Email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
              <button 
                type="submit" 
                className="submit-button"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="signup-footer">
          <p className="footer-text">
            No credit cards required.
            <a 
              href="https://www.hexnode.com/mobile-device-management/request-demo/" 
              className="demo-link"
            >
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;