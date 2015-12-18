function question_change(index) {
    var data = [
        {id: 1, text: "This is one comment"},
        {id: 2, text: "This is *another* comment"}
    ];
    document.getElementById('question').innerHTML = data[index].text;
}

function social_media_change(state) {
    var data2 = [
        {id: 1, text: "This is one comment aaa"},
        {id: 2, text: "This is *another* comment aaa"}
    ];
    document.getElementById('social').innerHTML = data2[state].text;
}

var Button_Click = React.createClass({
    getInitialState: function() {
        return {button_data: [], count: 0};
    },
    handleHover: function() {
        document.getElementById('social').style.visibility = 'visible';
    },
    handleMouseLeave: function() {
        document.getElementById('social').style.visibility = 'hidden';
    },
    handleClick: function(id) {
        this.state.button_data.push({"id": id, "question": question_change(this.state.count)});
        social_media_change(this.state.count);
        this.state.count += 1;
        console.log(this.state.button_data);
    },
    render: function() {
        return (
            <div>
                <button className="btn" id="Strongly Agree" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick.bind(this, 1)}>Strongly Agree</button>
                <button className="btn" id="Agree" onClick={this.handleClick.bind(this, 2)}>Agree</button>
                <button className="btn" id="No Opinion" onClick={this.handleClick.bind(this, 3)}>No Opinion</button>
                <button className="btn" id="Disagree" onClick={this.handleClick.bind(this, 4)}>Disagree</button>
                <button className="btn" id="Strongly Disagree" onClick={this.handleClick.bind(this, 5)}>Strongly Disagree</button>
            </div>
    )
    }
});

ReactDOM.render(
    <Button_Click />,
    document.getElementById('buttons')
);

