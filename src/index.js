import _ from 'lodash'


export default function foo(){
    let obj={
        a:1
    }
    console.log(_.get(obj,'a'))
}