/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import Spectacle Code Slide
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');
require('./presentation.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Image Classification with Tensorflow.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3}>
            October 1, 2019
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Outline
          </Heading>
          <List>
            <ListItem>Demo</ListItem>
            <ListItem>What is Machine Learning?</ListItem>
            <ListItem>What is Image Classification?</ListItem>
            <ListItem>Training a Model</ListItem>
            <ListItem>Making Predictions Based on a Model</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary" caps>
            What is Machine Learning?
          </Heading>
          <BlockQuote className="quote" margin="10px 0 0" textColor="secondary">
            <Quote>"The scientific study of algorithms and statistical models that computers use to perform a specific task without using specific instructions, relying on patterns and inference instead."</Quote>
            <Cite><a href="https://en.wikipedia.org/wiki/Machine_learning">Wikipedia</a></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary" caps>
            What is Machine Learning?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Machine learning algorithms create models from "training" data and use those models to make predictions about future as-yet-unseen inputs.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            It's well suited to tasks where defining all possible inputs and outputs would be difficult.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary" caps>
            What is Machine Learning?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Machine learning has become a hot topic in the past few years and is used for many different purposes such as:
          </Text>
          <List textColor="primary" className="list">
            <ListItem>Spam filters</ListItem>
            <ListItem>Suggested replies</ListItem>
            <ListItem>Face detection</ListItem>
            <ListItem>Traffic and weather predictions</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="primary" caps>
            Define the Problem
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            First step in solving a problem with machine learning is to clearly define the problem that you're trying to solve.
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            For my demo, the problem I wanted to solve was: <br /><br /><em>What is the primary object in a photo?</em>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Selecting a Machine Learning Type
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            After you define the problem, the next step is to identify the type of machine learning algorithm that can best help solve the problem.
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            There are three main types of machine learning:
          </Text>
          <List textColor="secondary" start={1} ordered className="list">
            <ListItem>Supervised Learning</ListItem>
            <ListItem>Unsupervised Learning</ListItem>
            <ListItem>Reinforcement Learning</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Supervised Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            Models are trained with <em>labeled</em> data, which they use to build relationships
            between input features and target prediction outputs.
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Useful in cases where there's something specific that you want to look for in the data.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Supervised Learning
          </Heading>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Example tasks:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem>Identifying a person based on their handwriting</ListItem>
            <ListItem>Finding a product's optimal price</ListItem>
            <ListItem>Determining if a mole is malignant or benign based on some criteria</ListItem>
            <ListItem>Analyzing customer sentiment from a review system</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Supervised Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            Demo uses the supervised learning approach
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            The model is able to predict what's in an image based on the relationships that it learned
            by being trained on a set of labeled images.
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            This approach is perfect for classification problems
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Unsupervised Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            Models are trained with <em>unlabeled</em> data and they learn relationships between input features on their own based on patterns.
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Useful in cases where you're exploring a dataset and may not know what to look for.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Unsupervised Learning
          </Heading>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Example tasks:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem>Clustering</ListItem>
            <ListItem>Generative models</ListItem>
            <ListItem>Unsupervised deep learning</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Reinforcement Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Useful in cases where 
          </Text>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Example tasks:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <Heading size={5} textColor="secondary" caps>
            Narrowing in on the Right Algorithm
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Different algorithms support different types of machine learning and solving different problems...
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            TALK A LITTLE ABOUT THE ALGORITHMS
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Selecting a Machine Learning Framework
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            Like React helps in developing a web app, machine learning frameworks help with creating, training, 
            and using machine learning models
          </Text>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Python is primary language used for machine learning, but there are Javascript frameworks available as well:
          </Text>
          <List textColor="tertiary" className="list">
            <ListItem><a href="https://www.tensorflow.org/js">Tensorflow.js</a></ListItem>
            <ListItem><a href="https://brain.js.org/#/">Brain.js</a></ListItem>
            <ListItem><a href="https://ml5js.org/">ML5.js</a></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            An open-source library for large-scale machine learning and numerical computation that's developed by Google.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            There are multiple Tensorflow libraries for different use cases and technologies, but the demo uses Tensorflow.js.
          </Text>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Can be used for:
          </Text>
          <List textColor="tertiary" className="list">
            <ListItem>Text analysis</ListItem>
            <ListItem>Image classification</ListItem>
            <ListItem>Sequence-to-sequence models for machine translation</ListItem>
            <ListItem>Recurrent neural networks</ListItem>
            <ListItem>Natural language processing</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow<em>.js</em>
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            It's designed to let you train and deploy models <strong>in the browser</strong> and on Node.js!
          </Text>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Key features:
          </Text>
          <List textColor="tertiary" className="list">
            <ListItem>Can use off-the-shelf Javascript models or convert Python models</ListItem>
            <ListItem>Can retrain pre-existing models using your own data</ListItem>
            <ListItem><strong>Can build and train models IN JAVASCRIPT using flexible APIs</strong></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow<em>.js</em>
          </Heading>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Key features continued:
          </Text>
          <List textColor="tertiary" className="list">
            <ListItem>User data can remain on their device</ListItem>
            <ListItem>Models can be used in offline contexts</ListItem>
            <ListItem>Uses WebGL/the Tensorflow C API when possible to improve performance</ListItem>
          </List>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Best of all? It's FREE and Google has lots of tutorials to help developers learn how to use it.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            MobileNet v2
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            In my demo, the question that I wanted to solve is <em>What is teh primary object in a photo?</em>, an image classification problem.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            To do this, I needed a model that was trained on labeled images representing many objects.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Tensorflow.js has a pre-existing model for this: MobileNet.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            MobileNet v2
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            MobileNets are small, low-latency, low-power, <em>mobile-first</em> computer vision models for Tensorflow that 
            maximize accuracy while taking into account the constraints of on-device/embedded applications.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            MobileNet v2
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Main difference between v1 and v2 is improved performance.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Can also build upon them with your own data through <em>transfer learning</em>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Getting an Image
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Great <a href="https://caniuse.com/#search=mediadevices">browser support for the MediaDevices API</a>, which gives you access to a device's camera.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Image isn't saved to the device, but it's available to the MobileNet for classification
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Getting an Image
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Taking a photo through the web browser takes a few steps:
          </Text>
          <List textColor="primary" ordered start={1} className="list">
            <ListItem>Get the user's permission to use the camera</ListItem>
            <ListItem>Stream the camera view into an HTML video element</ListItem>
            <ListItem>When the user clicks a button, copy the current video frame onto an 
              HTML canvas element
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            bgColor="secondary"
            code={require("!raw-loader!./assets/getimage.example").default}
            ranges={[
              { loc: [0, 16], title: "Capture an Image" },
              { loc: [0, 1], title: "Capture an Image", note: "Make sure the browser supports the MediaDevices API"},
              { loc: [2, 9], title: "Capture an Image", note: "Configure the camera options" },
              { loc: [10, 11], title: "Capture an Image", note: "Call the MediaDevices API and listen for a video stream" },
              { loc: [11, 12], title: "Capture an Image", note: "Update the UI to show the video stream" },
              { loc: [12, 13], title: "Capture an Image", note: "Set the container that shows the camera view to the stream" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Working with MobileNet v2
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            To use a pre-trained MobileNet model, you have to:
          </Text>
          <List ordered start={1} className="list">
            <ListItem>Load the model</ListItem>
            <ListItem>Pass the model input data</ListItem>
          </List>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            MobileNets accept Tensor3d objects, as well as HTML canvas, HTML image, and HTML video elements as inputs to generate predictions from.
          </Text>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            bgColor="secondary"
            code={require("!raw-loader!./assets/mobilenet.example").default}
            ranges={[
              { loc: [0, 7], title: "Load and Use a MobileNet" },
              { loc: [0, 1], title: "Load and Use a MobileNet", note: "Import the MobileNet model as an NPM module"},
              { loc: [2, 3], title: "Load and Use a MobileNet", note: "Create an async function to load and use the MobileNet" },
              { loc: [3, 4], title: "Load and Use a MobileNet", note: "Load the MobileNet" },
              { loc: [5, 6], title: "Load and Use a MobileNet", note: "Classify the element passed to the MobileNet after the model as loaded" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            How Does Image Classification Work?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Using the trained model, the computer makes a prediction about what the image is by selecting the label with the highest probability score.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            ADD MORE INFO HERE
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why Are the Results So Bad Sometimes?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            The computer can only classify images based on the types of images it's been trained on.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            A mobile net trained on just hot dogs, tacos, and cheeseburgers wouldn't be able to identify a pizza.
            Instead, it would label the pizza with an identifier it knows and that seems the most <em>similar</em> 
            to the pizza but with a low probability score.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
