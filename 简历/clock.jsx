class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }

    componentDidMount(){
        //设置计时器
        this.timerId=setInterval(()=>{
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        //删除计时器
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date: new Date()});
    }

    returnTime(){
        const hour=this.state.date.getHours();
        const minute=this.state.date.getMinutes();
        const second=this.state.date.getSeconds();
        return `${hour}:${minute}:${second}`;
    }

    style={
        'fontSize': '3em',
        'marginLeft': '50px', // 和section举例相同
    }

    render() { 
        return ( 
            <div className="d-flex justify-content-center text-primary" style={this.style}>
                <span>{this.returnTime()}</span>
            </div>
         );
    }
}

ReactDOM.render(<Clock />, document.getElementById('clock'));