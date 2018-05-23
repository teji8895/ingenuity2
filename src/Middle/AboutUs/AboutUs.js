import React,{Component} from 'react';
import aboutus  from './aboutus.jpg'; 

class AboutUs extends Component
{
render()
{
    return(
<div >
<div   >
<img src={aboutus} style={{height:"300px", width:"100%",padding:"3px" }}alt="About Us"/>
</div>

<div className="container" style={{margin:"80px" ,borderLeftStyle:"solid",borderLeftColor:"black",padding:"25px"}}>
<h1>Why Choose Us?</h1>
<p>   EQMS assist a large number of organizations regarding construction site safety that helps them maintaining safe working environment during repairing, refurbishing, demolishing or maintaining and other constructional works.
</p>
<br/>

<ul>
<li>A commitment to safe practice</li>
<li>Knowledge/expertise</li>
<li>Effective management</li>
<li>Co-ordination/communication/feedback</li>
<li>Information</li>
<li>raining</li>
<li>Monitoring</li>
</ul>

<br/>

<h1>EQMS Also in</h1>
<br/>
<ul>
<li>Construction Audit</li>
<li>96 hours of DRMC training</li>
<li>Development of Legal Register / Development of Register of EHS Hazard and Risk</li>
<li>Quarterly EHS Audit</li>
</ul>
 <br/>

 <h1>Next Step</h1>
<br/>
 <p>
Whether it’s a starting to understand the subject or an improvement of an existing process, feel free to contact us. We will be pleased to assist you.
</p>
 

</div>
</div>

 );
}
}
export default AboutUs;
