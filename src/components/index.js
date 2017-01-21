import React from 'react';
import { Button, Form, Row, Col, Input, Icon } from 'react-materialize';
var Barcode = require('react-barcode');


/**
 * Index page
 */
let Index = React.createClass({
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
            refNumber:"123456",
            refLetter:"EXT"
        }
        };
    },
    getStringFromDate: function(date){
        //day
        let day = date.getDate();
        if(day < 10){
            day="0"+day;
        }
        //month
        let month = (date.getMonth())+1;
        if(month < 10){
            month="0"+month;
        }
        //year
        let year = date.getFullYear();
        if(year < 100){
            year="19"+year;
        }
        return (""+day+"/"+month+"/"+year);
    },
    print: function(){
        let divToPrint=document.getElementById('toPrint');
        let newWin=window.open('print','Print-Window');
        newWin.document.open();
        newWin.document.write('<html><link type="text/css" rel="stylesheet" href="src/assets/css/reset.css" /><link type="text/css" rel="stylesheet" href="src/assets/css/index.css" /><link type="text/css" rel="stylesheet" href="src/assets/css/sticker.css" /><link type="text/css" rel="stylesheet" href="src/assets/css/print.css" /><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
        newWin.document.close();
        setTimeout(function(){newWin.close();},60);
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
        let date = new Date(event.target.value);
        let stick = this.state.sticker;
        stick.dateOfBirthString = this.getStringFromDate(date);
        this.setState({sticker: stick});
    },
    handleRefNumberChange:function(event){
        let stick = this.state.sticker;
        stick.refNumber = event.target.value;
        this.setState({sticker: stick});
    },
    handleRefLetterChange:function(event){
        let stick = this.state.sticker;
        stick.refLetter = event.target.value;
        this.setState({sticker: stick});
    },
    render: function() {
        var sticker = this.state.sticker;
        return(
            <section id="index">
                <section className="blue-section section-center valign-wrapper">
                    <a href="/#" ><img id="logo" className="left-align" src="src/assets/img/logo2PETIT.jpg" /></a>
                    <Row className="white-text container valign">
                        <Col s={12} >
                        <h1>Générateur d'étiquettes</h1>
                    </Col>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col l={4} m={10} s={12} offset="m1 l4">
                            <form>
                                <Input type="text" s={12} label="Nom"  value={sticker.lastName} onChange={this.handleLastNameChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="text" s={12} label="Prénom" value={sticker.firstName} onChange={this.handleFirstNameChange} validate><Icon>account_circle</Icon></Input>
                                <Col s={10} m={11}  offset="s2 m1" className={"dn-nomargin"}><label>Date de naissance</label></Col>
                                <Input  type="date" s={12}  onChange={this.handleDateOfBirthChange} validate><Icon>perm_contact_calendar</Icon></Input>
                                <Input type="text" s={8} label="Référence"  value={sticker.refNumber} onChange={this.handleRefNumberChange} validate><Icon>description</Icon></Input>
                                <Input type="text" s={4}  value={sticker.refLetter} onChange={this.handleRefLetterChange} validate></Input>
                            </form>

                        </Col>
                    </Row>
                </section>

                <section id="toPrint">
                    <div id="sticker">
                        <p className="names"><strong>{this.state.sticker.lastName} {this.state.sticker.firstName}</strong></p>
                        <p>D.N : {this.state.sticker.dateOfBirthString}</p>
                        <div id="barcode" className="center">
                            <Barcode value={this.state.sticker.refNumber} displayValue={false} showText={"hide"} margin={0} height={35} textMargin={2} />
                            <p ><strong>{this.state.sticker.refNumber} - {this.state.sticker.refLetter}</strong></p>
                                </div>
                        <div className="align-bottom"><p>CAMC : {this.state.sticker.dateToday}</p></div>
                    </div>
                </section>
                <section id="actions" className="center">
                    <Button waves='light' className={"blue"} onClick={this.print}>IMPRIMER</Button>
                </section>

            </section>

        );
    }
});
export default Index;