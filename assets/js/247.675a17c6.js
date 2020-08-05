(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{264:function(e,t,a){"use strict";a.r(t);var r=a(6),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("This page summarizes Section 6.2.1 of NCHRP Synthesis 514.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"Trip_based_models"}},[e._v("Trip-based models")]),e._v(", also commonly known as "),a("strong",[e._v("four-step models")]),e._v(", are a well established modeling approach, with well-known requirements for its development and deployment. Current and past statewide models range in terms of data requirements, costs, benefits, and implementation. Below are some examples of the stages of trip-based statewide models from the more basic to the more advanced.")]),e._v(" "),a("h1",{attrs:{id:"current-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-models"}},[e._v("#")]),e._v(" Current Models")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Maryland_Statewide_Transportation_Model"}},[e._v("The Maryland Statewide Transportation Model (MSTM)")]),e._v(" is an advanced trip-based model that covers the State of Maryland plus surrounding areas at the statewide layer and the remainder of North America at the regional layer.The MSTM is a multi-layer trip-based model that covers both person and freight travel demand. The model works at two geographic layers. Short distance trips are modeled for the statewide model study area, and long-distance trips include trips that have one or both trip ends at the national layer outside the statewide model study area.")]),e._v(" "),a("li",[a("a",{attrs:{href:"Georgia_Statewide_Model"}},[e._v("The Georgia Statewide Model is")]),e._v(" a state-of-practice transportation model. Like many contemporary statewide models it covers the entire country, with considerable network and zonal detail within Georgia, reduced detail in the five adjacent states, and substantially reduced detail beyond them. It includes both person and freight flow models that estimate demand separately, but use a combined traffic assignment procedure to estimate traffic volumes and travel times. The Georgia Statewide Model follows the four-step sequential travel forecasting process widely used in the practice of urban and statewide modeling. This model does not distinguish time-of-day periods but assigns daily volumes.")])]),e._v(" "),a("h1",{attrs:{id:"data-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-requirements"}},[e._v("#")]),e._v(" Data Requirements")]),e._v(" "),a("p",[e._v("The data requirements vary depending on the needs and budget of the state. The data requirements range from minimal to intensive and those variations track align with the costs and benefits of those implemented model systems. Below is a list of some such data requirements.")]),e._v(" "),a("ul",[a("li",[e._v("Transferable parameters from the NCHRP reports")]),e._v(" "),a("li",[e._v("ACS PUMS data and NHTS microdata")]),e._v(" "),a("li",[e._v("Statewide "),a("a",{attrs:{href:"Travel_surveys"}},[e._v("travel surveys")]),e._v(", fused urban travel surveys within their state (and sometimes adjacent ones), or relied upon urban surveys for those with one dominant metropolitan area.")]),e._v(" "),a("li",[a("a",{attrs:{href:"Stated_preference_surveys"}},[e._v("Revealed preference (RP) or stated preference (SP) surveys")])]),e._v(" "),a("li",[e._v('Cellular tracking or "'),a("a",{attrs:{href:"Big_Data"}},[e._v("Big Data")]),e._v('"')])]),e._v(" "),a("h1",{attrs:{id:"cost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cost"}},[e._v("#")]),e._v(" Cost")]),e._v(" "),a("p",[e._v("The effort required to improve trip-based models can be modest compared with those for developing more advanced models. Those states that can meet their needs with such models will reap significant advantages from such cost-effective incremental improvements. Possibly even larger efficiencies could be gained by pooling funds to conduct travel surveys across several adjacent states, although no such effort has been reported.")]),e._v(" "),a("p",[e._v("An RP/SP survey of the size and scope recently conducted for the California HSR modeling work, described in chapter seven “The California High-Speed Rail Ridership and Revenue Model,” is necessary for estimating a model specific for the modeled area. The cost of that survey was approximately $350,000.")]),e._v(" "),a("p",[e._v("Utilizing "),a("a",{attrs:{href:"Big_Data"}},[e._v("Big Data")]),e._v(" can provide a more cost effective method than conducting travel surveys. Their cost depends upon the geographic scale and duration of data provided. The expected cost of these data, ranging from $250,000 to $2 million, should be factored into the cost of all statewide models in the future.")]),e._v(" "),a("h1",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("Statewide models are often implemented based on the needs of the state and the data available or to be collected. Below are some sample implementation plans.")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"Model_Transferability"}},[e._v("Transferred Model")])])]),e._v(" "),a("p",[e._v("Several states have built models that meet their needs with no more than such knowledge, 'transferable parameters from the NCHRP reports listed in chapter four, “Traditional Personal Travel Behavior Data,” and summaries derived from the ACS PUMS data and NHTS microdata. They almost always lack a mode choice modeling component, but are otherwise a competent implementation of best practices in trip-based models. Thus, it is demonstrably easy to build a first-generation model once the initial, and often costly, investment has been made in developing the modeling backplane.")]),e._v(" "),a("p",[a("strong",[e._v("Using Survey Data")])]),e._v(" "),a("p",[e._v("Some states have conducted statewide travel surveys, fused urban travel surveys within their state (and sometimes adjacent ones), or relied upon urban surveys for those with one dominant metropolitan area, to derive trip characteristics used in the model (e.g., trip production and attractions, trip length frequency, and time-of-day distributions). The existing model can be updated using these data, or extended with new features or greater detail.")]),e._v(" "),a("p",[a("strong",[e._v("Using RP/SP Data")])]),e._v(" "),a("p",[e._v("Other states need to develop mode choice and network assignment capabilities that facilitate pricing analyses. The auto nest of urban and intercity mode choice models can be extended to include pricing, which requires asserting and calibrating the coefficients associated with the new sub-nest(s), based on experience elsewhere, or conducting or adapting additional revealed preference (RP) or stated preference (SP) surveys.")]),e._v(" "),a("p",[a("strong",[e._v("Destination Choice Component")])]),e._v(" "),a("p",[e._v("Replacing a traditional trip distribution model with a logit-based [ often leads to improvements in model validation and explanatory power. Such models are usually estimated using existing "),a("strong",[e._v("travel survey data")]),e._v(", which often requires adding occupation to the list of variables generated for synthetic populations or zonal estimates. However, the recent availability of OD matrices based on "),a("strong",[e._v('cellular tracking or "big data"')]),e._v(", with their ability to partition flows by residents versus visitors and trip purpose, is a huge advance that will revolutionize travel modeling.")]),e._v(" "),a("h1",{attrs:{id:"benefits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[e._v("#")]),e._v(" Benefits")]),e._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("Donnelly, R. & Moeckel, "),a("em",[e._v("NCHRP Synthesis 514 Statewide and Megaregional Travel Forecasting Models")]),e._v(", Transportation Research Board, Washington, DC, 2017. "),a("a",{attrs:{href:"http://www.trb.org/NCHRP/Blurbs/176702.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.trb.org/NCHRP/Blurbs/176702.aspx"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);