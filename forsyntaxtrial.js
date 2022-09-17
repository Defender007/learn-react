import React, { Component } from 'react'
 
 export default class forsyntaxtrial extends Component {
     render() {
         return (
             <div>
                 <ul>
                {this.items.map((i) => {
                     <li key={i}>{obji}</li>;
                }
                )}
                
                 </ul>
             </div>
         )
     }
 }
 
 /**
  * 
  */
 
   <button
     onClick={(e) =>
       this.props.items.filter((item) =>
         this.setState(() => (this.state.name = item))
       )
     }>

     {this.state.name}
   </button>;



   onClick = (name) => () => {
     this.setState((state) => ({
       ...state,
       [name]: state[name] + 1,
     }));
   };

   ({ title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => (
     <AddArticle
       name="Articles"
       title={title}
       summary={summary}
       onChangeTitle={onChangeTitle}
       onChangeSummary={onChangeSummary}
       onClickAdd={onClickAdd}
     />
   );