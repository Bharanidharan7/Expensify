import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setText, sortByAmount, sortByDate,setStartDate,setEndDate} from '../action/filters'


class ExpenseListFilter extends React.Component{
    state={
        calenderFocused:null
    }
    
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused}))
    }
    
    render(){
        return(
            <div>
            <input type='text' value={this.props.filters.text} onChange={(e) => {
                props.dispatch(setText(e.target.value))
            }} />
            <select 
            value={this.props.filters.value}
            onChange={(e) => {
                if (e.target.value === "date") {
                    this.props.dispatch(sortByDate())
                } else {
                    this.props.dispatch(sortByAmount())
                }
    
    
            }} >
                <option value="date" >Date</option>
                <option value="amount">amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
        
            </div>

    
        )};

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);