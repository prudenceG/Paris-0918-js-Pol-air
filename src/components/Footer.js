import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {Button, Avatar} from '@material-ui/core/';

import './Footer.css';

// Tape ton code ICI ! :) et bon courage !!!!!

class Footer extends Component {
    render() {
      return (
        <div className="container-footer">
          <ul className="list-footer">
            <li><Button color="primary" component={Link} to="/">Accueil</Button></li>
            <li><Button color="primary" component={Link} to="/BlockForcastMeteo">Prévisions météo</Button></li>
            <li><Button color="primary" component={Link} to="/HistoriquePollution">Historique pollution</Button></li>
          </ul>


          {/* Les avatars sont importés d'un composents material.io.
          La photo est importée directement du compte gitHub correspondant.
          Au rollover sur l'Avatar className="avatar2", la photo avatar disparait 
          pour rendre visible le logo gitHub en background.

          Pour pallier au problème de sécurité généré par target="_blank" 
          cf cet article pour plus d'info: 
          https://blog.dareboost.com/fr/2017/03/target-blank-rel-noopener-securite-performance/
          */}
          <Grid container direction="row" justify="center" align="center">
              <Grid item className="copyright">© / La Pol'Air team </Grid>
              <Grid item>
              <Grid container direction={'row'} justify="center" align="center" className="group-avatar">
              <div className="avatar"> 
                <a href="https://github.com/prudenceG" target="_blank" rel="noopener noreferrer" title="Prudence" >
                  <Avatar alt="Prudence" src="https://avatars0.githubusercontent.com/u/36316271?s=400&v=4" className="avatar2"/>
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/af1ne" target="_blank" rel="noopener noreferrer" title="Delph" >
                  <Avatar alt="Delphine BRUNET alias af1ne" src="https://avatars2.githubusercontent.com/u/39528061?s=400&u=1b5accaaf40b82dfd766d3032e9038d0597aeb89&v=4" className="avatar2" />
                </a> 
              </div>

              <div className="avatar"> 
                <a href="https://github.com/GuillaumeFerry" target="_blank" rel="noopener noreferrer" title="Guillaume" >
                  <Avatar alt="Guillaume FERRY" src="https://avatars2.githubusercontent.com/u/42844637?s=400&v=4" className="avatar2"/>
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/walidinkk" target="_blank" rel="noopener noreferrer" title="Walid" >
                  <Avatar alt="Walid BENMAKHLOUF" src="https://avatars0.githubusercontent.com/u/42183943?s=400&v=4" className="avatar2"/>
                </a>
              </div>

              <div className="avatar"> 
                <a href="https://github.com/samirkhennache" target="_blank" rel="noopener noreferrer" title="Samir" >
                  <Avatar alt="Samir KHENNACHE" src="https://avatars0.githubusercontent.com/u/39196407?s=400&v=4" className="avatar2"/>
                </a>
              </div>

               <div className="avatar">  
                <a href="https://github.com/Chopin85" target="_blank" rel="noopener noreferrer" title="Paolo" >
                  <Avatar alt="Paolo CATALANI" src="https://avatars1.githubusercontent.com/u/32762917?s=400&v=4" className="avatar2" />
                </a>
              </div>

              <div className="avatar">
                <a href="https://github.com/Vassili7115" target="_blank" rel="noopener noreferrer" title="Matthieu" >
                  <Avatar alt="Matthieu RANUCCI" src="https://avatars1.githubusercontent.com/u/35661086?s=400&v=4" className="avatar2" />
                </a>
              </div>
              </Grid>
              </Grid>           
          </Grid>
        </div>
      );
    }
  }


export default Footer;
