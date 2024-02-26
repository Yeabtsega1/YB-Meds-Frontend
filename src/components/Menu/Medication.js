// import React, { useEffect, useContext } from 'react';
// import { Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import Navbar2 from '../Navbar/Navbar2';
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import foodItems from './data';
// import { CartContext } from '../cart/Cart';

// const Menu = () => {
//   const { cartItems, setCartItems } = useContext(CartContext);

//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   const fetchData = () => {
//     const url = `${backendUrl}/api/foods`;
//     const params = {
//       method: 'get',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//     fetch(url, params)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const addToCart = (id) => {
//     const foodToAdd = foodItems.find((item) => item.food_id === id);
//     if (foodToAdd) {
//       const existingItem = cartItems.find((item) => item.food_id === id);
//       if (existingItem) {
//         setCartItems((prevItems) => {
//           return prevItems.map((item) =>
//             item.food_id === id
//               ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.food_price }
//               : item
//           );
//         });
//       } else {
//         setCartItems((prevItems) => [
//           ...prevItems,
//           { ...foodToAdd, quantity: 1, totalPrice: foodToAdd.food_price },
//         ]);
//       }
//     }
//   };

//   return (
//     <div>
//       <Navbar2 />
//       <div className='menu'>
//         <Row xs={1} sm={2} md={3} lg={4}>
//           {foodItems.map((f) => (
//             <Col key={f.food_id}>
//               <Card className='card' key={f.food_id}>
//                 <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + f.food_image} />
//                 <Badge bg="secondary">Huge Discounts</Badge>
//                 <Card.Body>
//                   <Card.Title>{f.food_name}</Card.Title>
//                   <Card.Text>Price: {f.food_price} ¥ </Card.Text>
//                   <Button variant="primary" onClick={() => addToCart(f.food_id)}>Add to Cart</Button>
//                 </Card.Body>
//                 <Card.Text>
//                   <div className="ratings">
//                     {f.ratings}
//                     <i className="fa fa-star rating-color"></i>
//                   </div>
//                 </Card.Text>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Menu;





// import React, { useState } from 'react';
// import Navbar2 from '../Navbar/Navbar2';

// const Menu = () => {
//   const [medicationInput, setMedicationInput] = useState('');
//   const [recommendationResult, setRecommendationResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const getChatGPTResponse = () => {
//     if (medicationInput.trim() !== '') {
//       setRecommendationResult('Loading...');

//       const apiKey = 'YOUR_API_KEY';
//       fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt: medicationInput,
//           max_tokens: 150,
//         }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         setRecommendationResult(data.choices[0].text);
//       })
//       .catch(error => {
//         console.error('Error fetching data from the server:', error);
//         setRecommendationResult('An error occurred.');
//       });
//     } else {
//       setRecommendationResult('Please enter your symptoms.');
//     }
//   };

//   const handleMedicationInputChange = event => {
//     setMedicationInput(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar2 />
//       <div className='menu'>
//         <input
//           type="text"
//           value={medicationInput}
//           onChange={handleMedicationInputChange}
//           placeholder="Enter your symptoms..."
//         />
//         <button onClick={getChatGPTResponse}>Get Recommendation</button>
//         <div>
//           <p>{loading ? 'Loading...' : recommendationResult}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;














// import React, { useState } from 'react';
// import Navbar2 from '../Navbar/Navbar2';
// import './Medication.css';

// const MedicationRecommendation = () => {
//   const [medicationInput, setMedicationInput] = useState('');
//   const [recommendationResult, setRecommendationResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const apiKey = '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';

//   const getRecommendation = () => {
//     if (medicationInput.trim() !== '') {
//       setLoading(true);
//       fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt: medicationInput,
//           max_tokens: 150,
//         }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         setRecommendationResult(data.choices[0].text);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data from The Server:', error);
//         setRecommendationResult('An error occurred.');
//         setLoading(false);
//       });
//     } else {
//       setRecommendationResult('Please enter your symptoms.');
//     }
//   };

//   const startVoiceInput = () => {
//     // Your voice input logic here
//   };

//   const showPopup = () => {
//     // Your popup logic here
//   };

//   const closePopup = () => {
//     // Your close popup logic here
//   };

//   const redirect = () => {
//     // Your redirect logic here
//   };

//   return (
//     <div>
//          <Navbar2 className="Nav" />
//       <div id="recommendation-container">
//         <h2>Medication Recommendation System</h2>
//         <input
//           type="text"
//           id="medication-input"
//           value={medicationInput}
//           onChange={(e) => setMedicationInput(e.target.value)}
//           placeholder="Enter your symptoms..."
//         />
//         <button id="recommendation-button" onClick={getRecommendation}>Get Recommendation</button>
//         <button id="voice-input-button" onClick={startVoiceInput}>Voice Input</button>
//         {/* New button for combined camera/gallery upload */}
//         <button id="upload-options-button" onClick={showPopup}>
//           <img src="Images/upload-icon.png" alt="Upload Icon" />
//         </button>
//         {/* Camera and Gallery buttons */}
//         <button id="camera-input-button" onClick={showPopup}>
//           <img src="Images/camera-icon.png" alt="Camera Icon" />
//         </button>
//         <button id="gallery-input-button" onClick={showPopup}>
//           <img src="Images/gallery-icon.png" alt="Gallery Icon" />
//         </button>
//         <p id="recommendation-result">{loading ? 'Loading...' : recommendationResult}</p>
//         <div id="loading-animation">Analyzing Image...</div>
//       </div>

//       <div className="popup-container" id="popupContainer">
//         <div className="popup">
//           <span className="close" onClick={closePopup}>&times;</span>
//           <p>In case of Emergency. Click 'OK' to use Emergency Service</p>
//           <button id="OK-button" onClick={redirect}>OK</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicationRecommendation;


// import React, { useState } from 'react';
// import Navbar2 from '../Navbar/Navbar2';
// import './Medication.css';

// const MedicationRecommendation = () => {
//   const [medicationInput, setMedicationInput] = useState('');
//   const [recommendationResult, setRecommendationResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const apiKey = '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';

//   const getRecommendation = () => {
//     if (medicationInput.trim() !== '') {
//       setLoading(true);
//       fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt: medicationInput,
//           max_tokens: 150,
//         }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         setRecommendationResult(data.choices[0].text);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data from The Server:', error);
//         setRecommendationResult('An error occurred.');
//         setLoading(false);
//       });
//     } else {
//       setRecommendationResult('Please enter your symptoms.');
//     }
//   };

//   const startVoiceInput = () => {
//     // Your voice input logic here
//   };

//   const handleImageInput = (event) => {
//     const file = event.target.files[0];
//     // You can add image analysis logic here
//     console.log('Image uploaded:', file.name);
//   };

//   const startCameraInput = () => {
//     // Your camera input logic here
//   };

//   const handleCameraInput = (event) => {
//     // Your camera input handling logic here
//   };

//   const captureFromCamera = () => {
//     // Your camera capture logic here
//   };

//   const showPopup = () => {
//     // Your popup logic here
//   };

//   const closePopup = () => {
//     // Your close popup logic here
//   };

//   const redirect = () => {
//     // Your redirect logic here
//   };

//   return (
//     <div>
//       <Navbar2 className="Nav" />
//       <div id="recommendation-container">
//         <h2>Medication Recommendation System</h2>
//         <input
//           type="text"
//           id="medication-input"
//           value={medicationInput}
//           onChange={(e) => setMedicationInput(e.target.value)}
//           placeholder="Enter your symptoms..."
//         />
//         <button id="recommendation-button" onClick={getRecommendation}>Get Recommendation</button>
//         <button id="voice-input-button" onClick={startVoiceInput}>Voice Input</button>
//         {/* New button for combined camera/gallery upload */}
//         <input type="file" onChange={handleImageInput} />
//         {/* Camera and Gallery buttons */}
//         <button id="camera-input-button" onClick={startCameraInput}>Camera</button>
//         <button id="gallery-input-button" onClick={showPopup}>Gallery</button>
//         <p id="recommendation-result">{loading ? 'Loading...' : recommendationResult}</p>
//         <div id="loading-animation">Analyzing Image...</div>
//       </div>

//       <div className="popup-container" id="popupContainer">
//         <div className="popup">
//           <span className="close" onClick={closePopup}>&times;</span>
//           <p>In case of Emergency. Click 'OK' to use Emergency Service</p>
//           <button id="OK-button" onClick={redirect}>OK</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicationRecommendation;







// import React, { useState, useEffect } from 'react';
// import './Medication.css'; // Import CSS for styling

// const MedicationRecommendation = () => {
//   const [medicationInput, setMedicationInput] = useState('');
//   const [recommendationResult, setRecommendationResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const apiKey = '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';

//   const getRecommendation = () => {
//     if (medicationInput.trim() !== '') {
//       setLoading(true);
//       fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt: medicationInput,
//           max_tokens: 150,
//         }),
//       })
//         .then(response => response.json())
//         .then(data => {
//           setRecommendationResult(data.choices[0].text);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data from The Server:', error);
//           setRecommendationResult('An error occurred.');
//           setLoading(false);
//         });
//     } else {
//       setRecommendationResult('Please enter your symptoms.');
//     }
//   };

//   const startVoiceInput = () => {
//     // Use Web Speech API for speech recognition
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US';

//     recognition.onresult = function (event) {
//       const transcript = event.results[0][0].transcript;
//       setMedicationInput(transcript);
//     };

//     recognition.onerror = function (event) {
//       console.error('Speech recognition error:', event.error);
//     };

//     recognition.start();
//   };

//   const handleImageInput = (event) => {
//     const file = event.target.files[0];
//     // You can add image analysis logic here
//     console.log('Image uploaded:', file.name);
//   };

//   const handleCameraInput = (event) => {
//     // Your camera input handling logic here
//   };

//   const captureFromCamera = () => {
//     // Your camera capture logic here
//   };
 

//   const closePopup = () => {
//     // Your closePopup function
//   };

//   const redirect = () => {
//     // Your redirect function
//   };

//   useEffect(() => {
//     console.log("Component mounted, showing popup");
//     showPopup();
//   }, []);

//   return (
//     <div>
//       <div id="recommendation-container">
//         <h2>Medication Recommendation System</h2>
//         <input
//           type="text"
//           id="medication-input"
//           value={medicationInput}
//           onChange={(e) => setMedicationInput(e.target.value)}
//           placeholder="Enter your symptoms..."
//         />
//         <button id="recommendation-button" onClick={getRecommendation}>Get Recommendation</button>
//         <button id="voice-input-button" onClick={startVoiceInput}>Voice Input</button>
//         {/* New button for combined camera/gallery upload */}
//         <input type="file" onChange={handleImageInput} />
//         {/* Camera and Gallery buttons */}
//         <button id="camera-input-button" onClick={captureFromCamera}>Camera</button>
//         <button id="gallery-input-button">Gallery</button>
//         <p id="recommendation-result">{loading ? 'Loading...' : recommendationResult}</p>
//         <div id="loading-animation">Analyzing Image...</div>
//       </div>

//       {showPopup && (
//            <div className="popup-container" id="popupContainer">
//         <div className="popup">
//           <span className="close" onClick={closePopup}>&times;</span>
//           <p>In case of Emergency. Click 'OK' to use Emergency Service</p>
//           <button id="OK-button" onClick={redirect}>OK</button>
        
//       </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MedicationRecommendation;


import React, { useState, useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import './Medication.css';

const MedicationRecommendation = () => {
  const [medicationInput, setMedicationInput] = useState('');
  const [recommendationResult, setRecommendationResult] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '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';

  const getRecommendation = () => {
    if (medicationInput.trim() !== '') {
      setLoading(true);
      fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: medicationInput,
          max_tokens: 150,
        }),
      })
        .then(response => response.json())
        .then(data => {
          setRecommendationResult(data.choices[0].text);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data from The Server:', error);
          setRecommendationResult('An error occurred.');
          setLoading(false);
        });
    } else {
      setRecommendationResult('Please enter your symptoms.');
    }
  };


  const startVoiceInput = () => {
    // Use Web Speech API for speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setMedicationInput(transcript);
    };

    recognition.onerror = function (event) {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  const handleImageInput = (event) => {
    const file = event.target.files[0];
    // You can add image analysis logic here
    console.log('Image uploaded:', file.name);


  };

  const startCameraInput = () => {
    
    const constraints = {
      video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
        };
        document.getElementById('recommendation-container').appendChild(video);
      }
      )
  };

  // const handleCameraInput = (event) => {

  // };

  // const captureFromCamera = () => {
  // };

  const showPopup = () => {
    console.log("Popup is shown!");
    document.getElementById("popupContainer").style.display = "block";
  };

  const closePopup = () => {
    document.getElementById("popupContainer").style.display = "none";
  };

  const redirect = () => {
    console.log("Redirecting...");
    // Replace 'https://ai-doctor-website.com' with the actual URL you want to redirect to
    // window.location.href = "https://ai-doctor-website.com";
    window.location.href = "tel:9347135267";
  };

  useEffect(() => {
    console.log("Component mounted, showing popup");
    showPopup();
  }, []);

  return (
    <div>
      <Navbar2 className="Nav" />
      <div id="recommendation-container">
        <h2>Medication Recommendation System</h2>
        <input
          type="text"
          id="medication-input"
          value={medicationInput}
          onChange={(e) => setMedicationInput(e.target.value)}
          placeholder="Enter your symptoms..."
        />
        <button id="recommendation-button" onClick={getRecommendation}>Get Recommendation</button>
        <button id="voice-input-button" onClick={startVoiceInput}>Voice Input</button>
        <input type="file" onChange={handleImageInput} />
        <button id="camera-input-button" onClick={startCameraInput}>Camera</button>
        <p id="recommendation-result">{loading ? 'Loading...' : recommendationResult}</p>
        <div id="loading-animation">Analyzing Image...</div>
      </div>

      <div className="popup-container" id="popupContainer">
        <div className="popup">
          <span className="close" onClick={closePopup}>&times;</span>
          <p>In case of Emergency. Click 'OK' to use Emergency Service</p>
          <button id="OK-button" onClick={redirect}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default MedicationRecommendation;



