import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../util/misc';

import MatchesBlock from '../../util/matches_block'

export default class Block extends Component {
    state={
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: reverseArray(matches)
            });
        })
    }

    showMatches =(matches)=>(
        matches ?
            matches.map((match)=>(
                <div className="item">
                    <div className="wrapper">
                        <MatchesBlock match={match}/>
                    </div>

                </div>
            ))

        :null
    )
    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
