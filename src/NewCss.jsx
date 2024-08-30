import React from 'react'

export default function NewCss() {
// 1- animate height from 0 to auto with transition
// it wants pasibole before cuz we couldnt animate to auto with transition
// height: calc-size(auto)   this new css code dose it bruv but its not supported yet

// 2-@starting-style{}
// new future that you can put the initial style for a element the first its rendred
// .box{
// height:150px
// transition:height 1s
// bg:black
//  @starting-style{
//  height:0px
//  }
// }
// so when its first rendering it will be height 0px and then will be 150
  return (
    <div>NewCss</div>
  )
}
