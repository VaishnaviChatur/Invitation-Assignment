import React from "react";

const invitation = (props) => {
  return (
    
    <div>
      <h1 style={{textAlign :"center"}}>Invitation</h1>

      <section>
        <a> Subject :{props.invitation} </a><br></br>
        <a> To : {props.to}</a><br></br><br></br>
        <a>Hi, {props.name}</a><br></br>
        <p>
         
          I am having a {props.party} next Friday at my Home . Would you like to
          come ? It will be fun . Lots of people from my school are coming . you
          know some of them -{props.threename}
         <br></br><br></br> My house is behind our school , near {props.location}
          <br></br><br></br>I hope you will come and see you soon .
          <br></br><br></br>  from , <br></br>{props.name}
        </p>
      
      </section>
     
    </div>
  );
};

export default invitation;
