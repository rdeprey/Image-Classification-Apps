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
  Image,
  CodePane,
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
            Getting Started with Image Classification with Tensorflow.js
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
            <ListItem>Approaches to Machine Learning Problems</ListItem>
            <ListItem>Getting Started with Tensorflow.js</ListItem>
            <ListItem>How Does Image Classification Work?</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            You can try out the demo by visiting <a href="https://plant-classifier-77263.web.app">https://plant-classifier-77263.web.app</a> or scanning this QR code:<br /><br />
            <Image src="images/app-qr-code.png" alt="QR code for app" />
          </Text>
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
            A set of algorithms that create models from "training" data and use those models to make predictions about future as-yet-unseen inputs.
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
          <List textColor="primary" className="list split-list">
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
          <div style={{ float: 'left', width: '50%' }}>
            <Text margin="20px 0 0" textColor="secondary" size={1}>
              For my demo, the problem I wanted to solve was: <br /><br /><em>What is the primary object in a photo?</em>
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%' }}>
            <Image src="images/photo-collage.png" alt="Photo examples" />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Selecting a Machine Learning Type
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            Identify the type of machine learning algorithm that can best help solve the problem
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
            <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
              <Text margin="40px 0 0" textColor="secondary" size={1}>
                Useful in cases where there's something specific that you want to look for in the data.
              </Text>
            </div>
            <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
              <Image src="images/supervised-machine-learning.png" alt="Example supervised machine learning flow" />
              <small>Atul. (2019, May 22.) <a href="https://www.edureka.co/blog/machine-learning-tutorial/">Machine Learning Tutorial for Beginners</a></small>
            </div>
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
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="secondary" size={1}>
              The model is able to predict what's in an image based on the relationships that it learned
              by being trained on a set of labeled images.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
              <Image src="images/cat-dog-classification.gif" alt="Machine learning example" />
              <small>Tata, Venkatesh. (2017, December 13.) <a href="https://becominghuman.ai/building-an-image-classifier-using-deep-learning-in-python-totally-from-a-beginners-perspective-be8dbaf22dd8">Simple Image Classification using Convolutional Neural Network - Deep Learning in Python</a></small>
          </div>
          <div style={{ clear: 'both', paddingTop: '15px', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="secondary" size={1}>
              This approach is perfect for classification problems
            </Text>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Unsupervised Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            Models are trained with <em>unlabeled</em> data and they learn relationships between input features on their own based on patterns.
          </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="secondary" size={1}>
              Useful in cases where you're exploring a dataset and may not know what to look for.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
            <Image src="images/unsupervised-machine-learning.png" alt="Example unsupervised machine learning flow" />
            <small>Atul. (2019, May 22.) <a href="https://www.edureka.co/blog/machine-learning-tutorial/">Machine Learning Tutorial for Beginners</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Unsupervised Learning
          </Heading>
          <Text margin="40px 0 0" textColor="secondary" size={1}>
            Example tasks:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem>Detecting fraudulent transactions</ListItem>
            <ListItem>"Basket analysis" - seeing what products are often purchased together</ListItem>
            <ListItem>Segmenting data into groups</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Reinforcement Learning
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            There's no training data. The model learns from experience instead.
          </Text>
          <div style={{ float: 'left', width: '56%', textAlign: 'left' }}>
            <Text margin="20px 0 0" textColor="secondary" size={1}>
              Collects training examples (i.e., this action was "good" or "bad") through trial-and-error as it tries to 
              complete a task, with goal of maximizing long-term reward.
            </Text>
          </div>
          <div style={{ float: 'right', width: '40%', marginLeft: '20px', marginTop: '60px' }}>
            <Image src="images/reinforcement-learning-framework.png" alt="Reinforcement learning framework" />
            <small>Ravindra, Savaram. (2017, June.) <a href="https://www.kdnuggets.com/2017/06/machine-learning-algorithms-used-self-driving-cars.html">The Machine Learning Algorithms Used in Self-Driving Cars</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Reinforcement Learning
          </Heading>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="secondary" size={1}>
              Example tasks:
            </Text>
            <List textColor="secondary" className="list">
              <ListItem>Self-driving cars</ListItem>
              <ListItem>Computer as game opponent</ListItem>
            </List>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
            <Image src="https://media.giphy.com/media/fBnxS9yMW3h96/giphy.gif" alt="Google AlphaGo" />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Selecting a Machine Learning Framework
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            Frameworks help with creating, training, and using machine learning models
          </Text>
          <Text margin="40px 0 0" textColor="tertiary" size={1}>
            Python is primary language used for machine learning, but there are Javascript frameworks available as well:
          </Text>
          <List textColor="tertiary" className="list split-list">
            <ListItem><a href="https://www.tensorflow.org/js">Tensorflow.js</a></ListItem>
            <ListItem><a href="https://brain.js.org/#/">Brain.js</a></ListItem>
            <ListItem><a href="https://ml5js.org/">ML5.js</a></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow
          </Heading>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="20px 0 0" textColor="tertiary" size={1}>
              An open-source library for large-scale machine learning and numerical computation
            </Text>
            <Text margin="40px 0 0" textColor="tertiary" size={1}>
              Developed and supported by Google
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
            <Image src="images/tensorflow-logo.png" alt="Tensorflow logo" />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Tensorflow
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1}>
            There are multiple Tensorflow libraries for different use cases and technologies including mobile, Internet of Things devices, and Javascript.
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
            Specifically designed to let you train and deploy models <strong>in the browser</strong> and on Node.js!
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
              More Features:
            </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <List textColor="tertiary" className="list">
              <ListItem>User data can remain on their device</ListItem>
              <ListItem>Models can be used in offline contexts</ListItem>
              <ListItem>Uses WebGL/the Tensorflow C API when possible to improve performance</ListItem>
              <ListItem>It's FREE and Google has lots of tutorials to help developers learn how to use it</ListItem>
            </List>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px' }}>
            <CodePane 
              lang="jsx"
              source={require("!raw-loader!./assets/tensorflowjsimport.example").default}
              className="code-pane"
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Back to the Demo...
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Getting an Image to Classify
          </Heading>
          <div style={{ float: 'left', width: '60%', textAlign: 'left' }}>
            <Text margin="20px 0 0" textColor="primary" size={1}>
              There's great <a href="https://caniuse.com/#search=mediadevices">browser support for the MediaDevices API</a>, which gives you access to a device's camera.
            </Text>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              Image isn't saved to the device, but it's available to the MobileNet for classification
            </Text>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="images/demo.gif" alt="Demo example" style={{ width: '70%' }} />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="secondary" caps>
            Getting an Image to Classify
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
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Text margin="20px 0 0" textColor="primary" size={1}>
            In my demo, the question that I wanted to solve is <em>What is the primary object in a photo?</em>, an image classification problem.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            To do this, I needed a model that was trained on labeled images representing many objects...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Tensorflow.js has a pre-existing model for this
          </Heading>
          <Heading size={5} textColor="tertiary" margin="40px 0">
            <em>MobileNet</em>!
          </Heading>
          <Image src="https://media.giphy.com/media/pylpD8AoQCf3CQ1oO2/giphy.gif" alt="Lightbulb" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            MobileNet
          </Heading>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Small, low-latency, low-power, <em>mobile-first</em> computer vision models for Tensorflow that 
            maximize accuracy while taking into account the constraints of on-device/embedded applications.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            MobileNet
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Multiple versions to choose from based on your performance budget
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Can identify about 1,000 objects out of the box based on the <a target="_blank" style={{ color: '#ffffff' }} href="http://image-net.org/index">ImageNet project</a>
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Can also build upon them with your own data through <em>transfer learning</em>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>
            Working with a MobileNet
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
            To use a pre-trained MobileNet model:
          </Text>
          <List ordered start={1} className="list">
            <ListItem>Load the model</ListItem>
            <ListItem>Pass the model input data</ListItem>
          </List>
          <Text margin="20px 0 0" textColor="secondary" size={1}>
              MobileNets can make predictions from:
            </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <List className="list">
              <ListItem>HTML canvas</ListItem>
              <ListItem>HTML image</ListItem>
              <ListItem>HTML video</ListItem>
              <ListItem>Tensor3D objects<br />(<em>3-</em>dimensional array)</ListItem>
            </List>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '15px' }}>
            <Image src="images/scalar-vector-matrix-tensor.png" alt="Tensors vs. matrices" />
            <small>Hadrienj. (2018, March 26.) <a href="https://hadrienj.github.io/posts/Deep-Learning-Book-Series-2.1-Scalars-Vectors-Matrices-and-Tensors/">Deep Learning Book Series: 2.1 Scalars Vectors Matrices and Tensors</a></small>
          </div>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            bgColor="secondary"
            code={require("!raw-loader!./assets/mobilenet.example").default}
            ranges={[
              { loc: [0, 9], title: "Load and Use a MobileNet" },
              { loc: [0, 1], title: "Load and Use a MobileNet", note: "Import the MobileNet model as an NPM module"},
              { loc: [2, 3], title: "Load and Use a MobileNet", note: "Create an async function to load and use the MobileNet" },
              { loc: [3, 4], title: "Load and Use a MobileNet", note: "Load the MobileNet" },
              { loc: [6, 9], title: "Load and Use a MobileNet", note: "Classify the element passed to the MobileNet" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            How Does Image Classification Work?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Using the trained model (a MobileNet), the computer makes a prediction about what the image is by selecting the label with the highest probability score.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            This is done through something called a Convolutional Neural Net (CNN).
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            MobileNets, under the hood, are convolutional neural nets.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="20px 0 0" textColor="primary" size={1}>
              When a computer "sees" an image, it sees a 2D array array of numbers that represent pixel colors in the image.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '15px' }}>
            <Image src="images/cnn0.png" alt="CNN example" />
            <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
          </div>
          <div style={{ clear: 'both', paddingTop: '15px', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              Comparisons are very literal - if the pixels don't match in a given position then it's a non-match, regardless of other content in the image.
            </Text>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="20px 0 0" textColor="primary" size={1}>
              This is where convolutional neural nets come in.
            </Text>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              A CNN is a type of multilayered neural network designed to take advantage of the 2D structure of an input image.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '15px' }}>
            <Image src="images/cnn1.png" alt="CNN example" />
            <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            CNNs analyze images piece by piece, looking for <strong>features</strong>.
          </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              Each feature is a mini-image, composed of a small 2D array and they match common parts of the image.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '45px' }}>
            <Image src="images/cnn2.png" alt="CNN example" />
            <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Analyzing by pieces helps a CNN recognize rough feature matches in roughly the same area, so they can match whole images reasonably well.
          </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              When a CNN gets a new image, it doesn't know where the features will match, so it looks for them throughout the whole image.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '45px' }}>
            <Image src="images/cnn3.png" alt="CNN example" />
            <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Each feature is calculated across every piece of the whole image, forming a <strong>filter</strong>.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            To calculate the match of a feature to a piece of the image:<br /><br />
            <em>Number of pixels in the feature x Value of corresponding pixels in the image</em><br /><br />
            Then, add the results of the calculation above and divide by the total number of pixels in the feature.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Every matching pixel results in a 1 and a mismatch is a -1.
          </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left' }}>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              If all of the pixels in a feature match, then adding the values and dividing by the total number of pixels equals 1. No matches would result in -1.
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '45px' }}>
            <Image src="images/cnn4.png" alt="CNN example" />
            <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            This process is repeated for every feature.
          </Text>
            <Text margin="40px 0 0" textColor="primary" size={1}>
              A new 2D array is made from the answer from each filter based on where in the image each piece is located.
            </Text>
          <div style={{ float: 'left', width: '46%', textAlign: 'left', marginTop: '10px' }}>
            <Image src="images/cnn5.png" alt="CNN example" />
          </div>
          <div style={{ float: 'right', width: '50%', marginLeft: '20px', marginTop: '10px' }}>
            <Image src="images/cnn6.png" alt="CNN example" />
          </div>
          <small>Rohrer, Brandon. (2016, August 18.) <a style={{ color: '#ffffff' }} href="https://brohrer.github.io/how_convolutional_neural_networks_work.html">How Do Convolutional Neural Networks Work?</a></small>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            <strong>Backpropagation</strong> determines the features of the image.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            During training, each <em>labeled</em> processed image has an error amount assessed on it.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            It tells you how good the features and weights are.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>
            Convolutional Neural Nets (CNNs)
          </Heading>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Values are adjusted to decrease the amount of error.
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={1}>
            Patterns that occur in lots of images get "baked into" the features and weights
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why Are the Results Still So Bad Sometimes?
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
        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why Are the Results So Bad Sometimes?
          </Heading>
          <Text margin="20px 0 0" textColor="primary" size={1}>
            Results can also be negatively impacted by things like:
          </Text>
          <List textColor="primary" className="list">
            <ListItem>The amount of light in a photo</ListItem>
            <ListItem>The focal point</ListItem>
            <ListItem>The angle</ListItem>
            <ListItem>The volume of images the model was trained on</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
