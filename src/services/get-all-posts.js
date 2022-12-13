// import React from "react";
// import axios from "axios";
// import { Component } from "react";

// class GetAllPosts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get(process.env.REACT_APP_API_ADDRESS + "/posts/get_posts", null, {
//         params: {
//           user_id: 1,
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         this.setState({ posts: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .then(function () {});
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="posts">
//           <div className="col-sm-6">
//             {this.state.posts.map((datum) => (
//               <div className="row">
//                 <div className="col-sm-4">key={datum.id}</div>
//                 <div className="col-sm-4">data1={datum.data1}</div>
//                 <div className="col-sm-4">data2={datum.data2}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default new GetAllPosts();

// export default function GetAllPosts(user_id) {
//   const [userPosts, setUserPosts] = useState([]);
//   useEffect(() => {
//     axios
//       .get(process.env.REACT_APP_API_ADDRESS + "/posts/get_posts", null, {
//         params: {
//           user_id: 1,
//         },
//       })
//       .then((response) => {
//         setUserPosts(response.data);
//       })
//       .catch((err) => console.warn(err));
//   }, []);
//   return userPosts;
// }

// ------------------------------------------------------

// class DataandForm extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             row:[]
//         }
//     }

//     componentDidMount()
//     {
//         const axios = require('axios');

//         // Make a request for a user with a given ID
//         axios.get('http://localhost:8080/data/index.php')
//           .then( response =>{
//             // handle success
//             console.log(response);
//             this.setState({row:response.data});
//           })
//           .catch(function (error) {
//             // handle error
//           console.log(error);
//           })
//           .then(function () {
//             // always executed

//           });

//     }

//     render()
//     {
//         return(

// <div className="container">
//     <div className="row">

//         <div className="col-sm-6">
//            {this.state.row.map(datum=>
//             <div className="row">
//                 <div className="col-sm-4">key={datum.id}</div>
//                 <div className="col-sm-4">data1={datum.data1}</div>
//                 <div className="col-sm-4">data2={datum.data2}</div>
//             </div>

//             )}
//         </div>

//     <div className="col-sm-10 offset-sm-2"><br/>

// <form class="form-inline" action=" " method="post" >
// <div class="form-group">
//   <label for="email">FIRSTNAME:</label>
//   <input type="text" name="data1" class="form-control" id="email" />
// </div>
// <div class="form-group">
//   <label for="pwd">LASTNAME:</label>
//   <input type="text" name="data2" class="form-control" id="pwd" />
// </div>

// <button type="submit" class="btn btn-danger">Submit</button>

// </form>

// </div>
//     </div>
// </div>

//         )
//     }
// }
// export default DataandForm
