import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-success">1.How will you improve the performance of a react application?</h2>
                    <p>ans:There are several below ways we can improve React performance.
                        A.  Using React-window or react- virtualized other than too many DOM.
                        B. By changing layout.
                        C. Updating state on fast user interactions such as scroll events, drag events, mouse over events also help to boost performance.
                        D. Passing new objects to child components on render cycle.
                        E. Finally,  we can minimizing the numbers of caching requests and many other way we can efficiently improve React performance. </p>
                    <h2 className="card-title text-success">2.What are the different ways to manage a state in React application?</h2>
                    <p>
                        Ans:Managing state is one of the hardest parts of any application and that is why there are so many state management library and tools available. Firstly we can manage state by using communication state forms which is the backbone of react app. Its covers essential aspects of an application such as loading, spinners, error messages, pop-ups which show cases that a communication lonk has been formed. It is loading phase of the transaction between different states. The second one is Dada State which receives all the information from the outer world and have an identifiers that help the Data state recognize and request particular information that it can store.  By using Control State user has input into the app where is a huge bundle of information with multiple objects in place,  and selected items act as a single string of information representing an Id and control state efficiently store both kinds of data without any trouble. The othe way to manage is Session state which can only read when a component is mounted. It store personal preferences based on the user's choice to depict the data. The last but not least, the Location state is that can give you the directions to a user to parts of the application that do not have unique URLS associated with them.
                    </p>
                    <h2 className="card-title text-success">3.How does prototypical inheretance work?</h2>
                    <p>Ans:Prototypal Inheritance stands on its own as an elegant inheritance mechanism. As such, it is perfectly well-suited to link objects together so that they share common properties and functionality for a variety of applications. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. Nearly all objects in JavaScript are instances of Object, which has null as its prototype.
                    </p>
                    <h2 className="card-title text-success">4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>Ans: React, keeps a track record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the old virtual DOM. Only the differences found are then reflected in the original DOM.
                        So, it’s obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of React.component , where React tries to optimize some time by not rendering components if no changes are found. Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>

                    <h2 className="card-title text-success">5.What is a unit test?Why should write unit test?</h2>
                    <p>Ans:Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>






                </div>
            </div>
        </div>
    );
};

export default Blogs;