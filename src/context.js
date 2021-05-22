import React, { Component } from 'react'

const UserContext = React.createContext();
// provider, 
const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users,action.payload]
      }
      default:
        return state
  }
}

export  class UserProvider extends Component {
    state = {
        users: [
          {
            id: "unique-1",
            name: "Mehmet SARBAK",
            department: "React",
            salary: "10000"
          },
          {
            id: "unique-2",
            name: "Yunus Çelik",
            department: "C#",
            salary: "9500"
          },
          {
            id: "unique-3",
            name: "Ozan Kanar",
            department: "Phyton",
            salary: "8500"
          },
          {
            id: "unique-4",
            name: "Ünal Semer",
            department: "C",
            salary: "7500"
          }
        ],
        dispatch : action =>  {
          this.setState(state => reducer(state,action))
        }
      } 
    render() {
        return (
         <UserContext.Provider value = {this.state}>
             {this.props.children}
         </UserContext.Provider>   
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;