import { ConfigProvider } from "antd";
import './App.css'

import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Survey from "./pages/survey";


function App() {
  const data = [
    {
      title: "Self evaluation of Individualism and Collectivism Horizontal Individualism",
      content: "Express the degree of agreement with the following statements by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        },
        {
          question: "One should live one's life independently of others.",
          answer: 0
        },
        {
          question: "I am a unique individual.",
          answer: 0
        },
        {
          question: "I like my privacy.",
          answer: 0
        },
        {
          question: "When I succeed, it is usually because of my abilities.",
          answer: 0
        },
        {
          question: "What happens to me is my own doing.",
          answer: 0
        }, 
        {
          question: "I enjoy being unique and different from others in many ways.",
          answer: 0
        }
      ]
    },
    {
      title: "Measuring stereotypes of the in-group and the out-group values",
      content: "Express the degree of agreement with the following statements by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "My happiness depends greatly on the happiness of those around me.",
          answer: 0
        },
        {
          question: "I like sharing little things with my neighbors.",
          answer: 0
        },
        {
          question: "The well-being of my coworkers is important to me.",
          answer: 0
        },
        {
          question: "It is important for me to maintain harmony within my group.",
          answer: 0
        },
        {
          question: "If a relative were in financial difficulty, I would help within my means.",
          answer: 0
        },
        {
          question: "If a co-worker receives a prize, I would feel proud.",
          answer: 0
        },
        {
          question: "To me, pleasure is spending time with others.",
          answer: 0
        },
        {
          question: "I feel good when I cooperate with others.",
          answer: 0
        },
        {
          question: "I think cooperation in the workplace is more important than competition.",
          answer: 0
        }

      ]
    },
    {
      title: "Measuring stereotypes of the in-group and the out-group values",
      content: "Imagine that you are a person attributing extremely more importance to Individualism that values personal achievement and rights, prioritizing needs of oneself and one’s immediate family. Express the degree of agreement with the following statement by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "I prefer to be direct and forthright when I talk with people.",
          answer: 0
        }, 
        {
          question: "One should live one's life independently of others.",
          answer: 0
        }, 
        {
          question: "I am a unique individual.",
          answer: 0
        }, 
        {
          question: "I like my privacy.",
          answer: 0
        }, 
        {
          question: "When I succeed, it is usually because of my abilities.",
          answer: 0
        }, 
        {
          question: "What happens to me is my own doing.",
          answer: 0
        }, 
        {
          question: "I enjoy being unique and different from others in many ways.",
          answer: 0
        }


      ]
    }
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey  data={data}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  return (
    
    <div className='main'>
      <ConfigProvider
        theme={{
          components: {
            Steps:{
              colorPrimary: '#5465FF',
            },
            Button: {
              colorPrimary: '#5465FF',
              colorPrimaryHover: '#3a4efc',
              colorPrimaryActive: '#3a4efc',
              borderRadius: 15,
            },
            Slider: {
              colorPrimary: '#5465FF',
              colorPrimaryHover: '#5465FF',
              colorPrimaryActive: '#5465FF',
              trackBg: '#5465FF',
              trackHoverBg: '#5465FF',
              dotActiveBorderColor: '#5465FF',
              handleColor: '#5465FF',
              handleActiveColor: '#5465FF',
              dotSize: 20,
              handleSize: 20,
            }
          }
        }}
      >
        <Home/>
      </ConfigProvider>
    </div>
  )
}

export default App
