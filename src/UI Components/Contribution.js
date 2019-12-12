import React from 'react'
import './Contribution.css'

class Contribution extends React.Component{
        constructor(props){
		super(props);

                this.key_contribution = props.key_contribution
	}

        render() {
                return(
                        <div className="Contribution">
                                <i class="fas fa-handshake"></i>
                                <p>{this.key_contribution.contribution}</p>
                        </div>
                );
        }  
}

export default Contribution;