import React, {Component, Fragment} from 'react';

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: {
                millimeter: 0,
                centimeter: 0,
                meter: 0
            }
        };

        this.unitName = React.createRef();
        this.unitValue = React.createRef();
        this.measurementToShow = React.createRef();
        this.convertedMeasurementResult = React.createRef();
    }

    handleConvert = e => {
        switch (this.unitName.current.value) {
            case "millimeter":
                this.setState({
                    results: {
                        millimeter: parseFloat(this.unitValue.current.value).toFixed(2),
                        centimeter: parseFloat(this.unitValue.current.value / 10).toFixed(2),
                        meter: parseFloat(this.unitValue.current.value / 1000).toFixed(2)
                    }
                });
                break;
            case "centimeter":
                this.setState({
                    results: {
                        millimeter: parseFloat(this.unitValue.current.value * 10).toFixed(2),
                        centimeter: parseFloat(this.unitValue.current.value).toFixed(2),
                        meter: parseFloat(this.unitValue.current.value * 100).toFixed(2)
                    }
                });
                break;
            case "meter":
                this.setState({
                    results: {
                        millimeter: parseFloat(this.unitValue.current.value * 1000).toFixed(2),
                        centimeter: parseFloat(this.unitValue.current.value * 100).toFixed(2),
                        meter: parseFloat(this.unitValue.current.value).toFixed(2)
                    }
                });
                break;
            default:
                console.log("Nothing happened!");
        }
    };

    handleChangeUnitValue = e => {
        this.handleConvert();
    };

    componentDidUpdate() {
        this.convertedMeasurementResult.current.value = parseFloat(this.state.results[this.measurementToShow.current.value]).toFixed(2);
    }

    handleConvertedMeasurementChange = e => {
        this.convertedMeasurementResult.current.value = parseFloat(this.state.results[this.measurementToShow.current.value]).toFixed(2);
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                            <fieldset>
                                <legend>Length Converter</legend>
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <select ref={this.unitName} className="form-control">
                                                <option value="millimeter">Millimeter</option>
                                                <option value="centimeter">Centimeter</option>
                                                <option value="meter">Meter</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={this.unitValue} className="form-control"
                                                   onKeyUp={this.handleChangeUnitValue}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select ref={this.measurementToShow} className="form-control"
                                                    onChange={this.handleConvertedMeasurementChange}>
                                                <option value="millimeter">Millimeter</option>
                                                <option value="centimeter">Centimeter</option>
                                                <option value="meter">Meter</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" ref={this.convertedMeasurementResult}
                                                   className="form-control"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-warning btn-block">Reset</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-block"
                                                    onClick={this.handleConvert}>Convert
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </fieldset>

                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Millimeter</td>
                                    <td>{this.state.results.millimeter}</td>
                                </tr>
                                <tr>
                                    <td>Centimeter</td>
                                    <td>{this.state.results.centimeter}</td>
                                </tr>
                                <tr>
                                    <td>Meter</td>
                                    <td>{this.state.results.meter}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
