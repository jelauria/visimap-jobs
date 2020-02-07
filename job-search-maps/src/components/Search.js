import React, {Component} from 'react';

class Search extends Component {
    alterText = (txtToChange) => {
        let newString = txtToChange.replace(/ /g, "%20");
        return newString.replace(/,/g, "%2C");
    }
    render() {
        return (
            <div className="row search">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onSubmit();
                    }}
                >
                    <div id="job" className="col-6">
                        <label>Job Title</label>
                        <input 
                        type="text" 
                        placeholder="ex. software engineer, nurse..."
                        onChange={(e) => {
                            const jobInput = e.target.value;
                            this.props.inputJob(this.alterText(jobInput));
                        }}
                        />
                    </div>
                    <div id="location" className="col-6">
                        <label>Location</label>
                        <input 
                        type="text" 
                        placeholder="enter any US city, state, or address..."
                        onChange={(e) => {
                            const locInput = e.target.value;
                            this.props.inputLoc(this.alterText(locInput));
                        }}
                        />
                        <button id="hello" type="submit" className="btn btn-primary col">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
