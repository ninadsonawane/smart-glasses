import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect , useState  } from 'react';


const alankey =  'af0d05efc621847cd75420d1994b4df62e956eca572e1d8b807a3e2338fdd0dc/stage'



function App() {


  const [It , setIt] = useState(0)
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command }) => {
       if(command === 'profile') {
        setIt(1)
       }
      }
    });

      
  }, []);
  if (It === 0) {
    return(
      <>
      <h1>Smart glasses</h1>
      </>
    )
  }
  else if(It === 1){
    return(
      <h1>Profile</h1>
    )
  }  else if(It === 2) {
    return(
      <h1>Feeds</h1>
    )
  }
  else if(It === 3) {
    return(
      <h1>Create</h1>
    )
  }
 
}

export default App;
