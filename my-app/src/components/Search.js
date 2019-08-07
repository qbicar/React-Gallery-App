import React, {Component} from 'react'

export default class Search extends Component{
    state ={
        searchText: ''
    }

    onSearchChange = e =>{
        this.setState({ searchText: e.target.value})
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.props.onSearch(this.query.value)
        e.currentTarget.reset();
    }
    render(){
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="is-hidden" htmlFor="search"></label>
                <input type="search"
                onChange ={this.onSearchChange}
                name="search"
                ref={(input) => this.query = input}
                placeholder="Search" />
                <button type="submit" id="submit" className="search-button"><i className="material-icons" href="https://fonts.googleapis.com/icon?family=Material+Icons"></i></button>
               </form>
        )
    }
}