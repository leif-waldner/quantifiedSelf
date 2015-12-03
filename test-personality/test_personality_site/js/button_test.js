function question_change(state) {
    var data = [
        {id: 1, text: "This is one comment"},
        {id: 2, text: "This is *another* comment"}
    ];
    document.getElementById('question').innerHTML = data[state].text;
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
        return {count: 0};
},
onClick: function() {
    social_media_change(this.state.count);
    question_change(this.state.count);
    this.state.count += 1;
},
render: function() {
    return (
        <div>
            <button className="btn" id="Strongly Agree" onClick={this.onClick}>Strongly Agree</button>
            <button className="btn" id="Agree" onClick={this.onClick}>Agree</button>
            <button className="btn" id="No Opinion" onClick={this.onClick}>No Opinion</button>
            <button className="btn" id="Disagree" onClick={this.onClick}>Disagree</button>
            <button className="btn" id="Strongly Disagree" onClick={this.onClick}>Strongly Disagree</button>
        </div>
    )
}
});

ReactDOM.render(
    <Button_Click />,
    document.getElementById('buttons')
);

