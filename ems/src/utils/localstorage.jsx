import employe from './supposeemployese.json'
import admin from './supposeadmin.json'

export const setLocalStorage=()=>{
    localStorage.setItem('employe',JSON.stringify(employe))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage= ()=>{
  
    const employee=JSON.parse(localStorage.getItem('employe'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employee,admin}
}