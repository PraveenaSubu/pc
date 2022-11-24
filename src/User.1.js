import { Counter } from "./Counter.1";

//object destructing (ES6)
// function User(props) {
//   //console.log(props, typeof props);
//   const { pic, name } = props;  //object constructing
//   return (
//     <section>
//       <img
//         className="user-profile-pic"
//         src={props.pic} alt={props.name} >
//       </img>
//       <h1 classname="user-name">
//         Hello, <span className="user-first-name">{props.name} </span>
//       </h1>
//       <p>Nice</p>
//     </section>
//   );
// }
// function Welcome({ name }) {
//   return (
//     <section>
//       <h1 classname="user-name">
//         Hello, <span className="user-first-name">{name} </span>
//       </h1>
//     </section>
//   );
// }
export function User({ pic, name }) {
    //console.log(props, typeof props);
    //const { pic, name } = props;  //object constructing
    return (
        <section>
            <img
                className="user-profile-pic"
                src={pic} alt={name}>
            </img>
            <h1 classname="user-name">
                Hello, <span className="user-first-name">{name} </span>❤😍
            </h1>
            <Counter />

        </section>


    );
}
