##Undersating REACT
----------------------------------------------------------------------------------------
#About
--> It's just a library and is mainly used to build the SPA.
--> Projects developed with react can be easily integrated with the existing non-react project also.
--> It uses the ES6(or ES2015) feature to write the code. Even most of the browers doesn't support it, BABEL (ES6 to older JS transpiler) is used to make it work in all browers.
--> It uses JSX to write code (JS+XML). Most frameworks use it's libraries to be embedded in XML but it's reverse thing here. XML (HTML code) will be embedded within the JS code which makes it more efficeint to render the HTML.
--> It uses components to render the views with data (state and props). 

#Props
--> Props are the immutable properties. These props mainly will be used for rendering the content with data retrieved from the state.

##State
--> All the data will flow from or to the STATE through props. All the childs receive the data from state through props.

##Component 
--> A simple function that extends Component and implements the render function which inturn returns some JSX. This will connect with state and get the props.

## ServiceWorker
--> The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, 
	he/she can still see results on the screen, as such, it helps you build a better user experience.
--> It's all about adding offline capabilities to your site. React creates a service worker for you without your configuration by default.
--> That's why we register it in the root component.

##UNDERSTANDING REACT-REDUX
----------------------------------------------------------------------------------------

##STORE
A large JSON object which maintains the state of application at once place.

##Reducer
--> Literally a chunk of STORE**(a large JSON object).
--> Function that takes the previous state(or Initial state for first time), applies action on it and return the resultant object.
--> Reducers will be imported only in AppReducer(while combining reducers to create a store) and will be accessed indirectly in containers through state object which is passed by the PROVIDER** (Revisit here to understand this line after visting CONTIANER** context).

##Provider
--> Makes the store available to all components via CONTAINER**

##Component
--> It will be more easy  to understand if we divide component into categories, Presentational and Container components. It's not manadatory to divide component and we can have all the things in a single file.
--> Better separation of concerns and we understand our app and our UI better by writing components this way and even reusability.

##Presentational Component
--> It concerns on how the things look.
--> A simple function that extends Component and implements the render function which inturn returns some JSX. It focuses on how data is represented.
--> Receives data and callbacks exclusivley from props. It doesn't deal with the state directly.
--> It allows containment(keeping all things in proper without any contamination) via this.props.children.
--> can be written as functional components unless they need state, lifecycle hooks, or performance optimizations.

##Container Component
--> It concerns on how the things work.
--> Acts like  glue (or intermediate) between the COMPONENT** and PROVIDER**(for state-collection of all reducers). This subscribes part or whole state and provides data to presentation component with props.
--> Complete state object will be passed to the container and this is the place where the props of particular component will be retrieved from the state(mapStateToProps and mapDispatchTOProps).
--> Container binds the props(retrived from store & also to update the store) and STORE** with react-redux's connect method which takes mapStateToProps, mapDispatchToProps and COMPONENT**(in which props data has to be rendered).
--> These are stateful and tends to serve as data sources. Provides data(even to other container) and callbacks (through actions) to the presentational components

##Action
--> Action object contains two fields as mandatory(actually only 'type' is mandatory), type(Type of action) and payload(data that can be used to give updated state). 
--> Once the action is executed the resultant will be broadcasted to all the REDUCERS** and it's handled where the action type gets matched and process the data and saves the data to state(if necessary);
--> If mutiple reducers are handling the same action type, the it will be processed in each and every REDUCER** and saved to the state(if necessary).

##REDUX-THUNK
--------------------------------------------------------
--> It's a small piece of code which can do a lot. But knowledge of Arrow functions, currying functions and composing function is required for understanding the redux-thunk.
#Understanding composing functions : https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
#Understanding Currying functions : https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe
#Understanding Redux-Thunk : https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50

<!--  REDUX THUNK CODE
function createThunkMiddleware(extraArgument){
    return ({ dispatch, getState}) => next => action => {
        if(typeof action === 'function'){
            return action(dispatch, getState, extraArgument);
        }

        return action;
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument= createThunkMiddleware;

export default thunk;
 -->
It uses a keyword dispatch which is different from store's dispatch method. We pass function as argument and that argument is checked for it's type. If it's function it executes the function else returns that object. If type is function and next return type is also a fuction it calls the latter function and it goes on until any type of object is returned.

