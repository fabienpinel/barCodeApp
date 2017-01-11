import React from 'react';
import { Button, Form, Row, Col, Input, Icon } from 'react-materialize';
var Barcode = require('react-barcode');


/**
 * Index page
 */
let Index = React.createClass({

    //ref = 6 chiffres et 3 lettres
    getInitialState: function() {
        let date = new Date();
        let dateString = this.getStringFromDate(date);

        return this.state = {sticker:
        {
            firstName:"",
            lastName:"",
            dateOfBirth:"",
            dateOfBirthString:"",
            dateToday:dateString,
            number:1,
            ref:"123456 AAA"
        }
        };
    },
    getStringFromDate: function(date){
        let day = date.getDate();
        let month = (date.getMonth())+1;
        if(month < 10){
            month="0"+month;
        }
        let year = date.getFullYear();
        return (""+day+"/"+month+"/"+year);
    },
    print: function(){
        var divToPrint=document.getElementById('toPrint');
        var newWin=window.open('','Print-Window');
        newWin.document.open();
        newWin.document.write('<html><link type="text/css" rel="stylesheet" href="src/assets/css/sticker.css" /><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
        newWin.document.close();
        setTimeout(function(){newWin.close();},10);
    },
    handleFirstNameChange:function(event){
        let stick = this.state.sticker;
        stick.firstName = event.target.value.toString().toUpperCase();
        this.setState({sticker: stick});
    },
    handleLastNameChange:function(event){
        let stick = this.state.sticker;
        stick.lastName = event.target.value.toString().toUpperCase();
        this.setState({sticker: stick});
    },
    handleDateOfBirthChange:function(event){
        console.log(event.target.value);
        let date = new Date(event.target.value);
        let stick = this.state.sticker;
        stick.dateOfBirthString = this.getStringFromDate(date);
        this.setState({sticker: stick});
    },
    handleNumberChange:function(event){
        let stick = this.state.sticker;
        stick.number = event.target.value;
        this.setState({sticker: stick});
    },
    handleRefChange:function(event){
        let stick = this.state.sticker;
        stick.ref = event.target.value;
        this.setState({sticker: stick});
    },
    render: function() {
        var sticker = this.state.sticker;
        return(
            <section id="index">
                <section className="blue-section section-center  valign-wrapper">
                    <Col l={6} m={8} s={12}  className="white-text container ">
                        <h1>Générateur d'étiquettes</h1>
                    </Col>
                </section>

                <section>
                    <Row>
                        <Col l={4} m={6} s={10} offset="s1 m3 l4">
                            <form>
                                <Input type="text" s={12} label="First Name" value={sticker.firstName} onChange={this.handleFirstNameChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="text" s={12} label="Last Name"  value={sticker.lastName} onChange={this.handleLastNameChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="date" s={12}  onChange={this.handleDateOfBirthChange} validate><Icon>perm_contact_calendar</Icon></Input>
                                <Input type="text" s={12} label="Reference"  value={sticker.ref} onChange={this.handleRefChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="number" s={12} label="Number of stickers to print"  value={sticker.number} onChange={this.handleNumberChange}><Icon>account_circle</Icon></Input>
                            </form>

                        </Col>
                    </Row>
                </section>

                <section id="toPrint" className="center">
                    <div id="sticker">
                        <div id="barcode" className="center">
                        <Barcode value={this.state.sticker.ref} />
                        </div>
                        <p><strong>{this.state.sticker.firstName} {this.state.sticker.lastName}</strong></p>
                        <p>B.N : {this.state.sticker.dateOfBirthString}</p>
                        <p>CAMC : {this.state.sticker.dateToday}</p>
                    </div>
                </section>
                <section id="actions" className="center">
                    <Button waves='light' className={"blue"} onClick={this.print}>PRINT</Button>
                </section>

            </section>

        );
    }
});
export default Index;