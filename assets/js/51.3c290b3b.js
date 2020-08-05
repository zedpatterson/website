(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{344:function(e,t,a){"use strict";a.r(t);var i=a(6),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The benefit of activity-based modeling (ABM) in travel forecasting comes from its capacity to provide a full range of quantitative dimensions to represent travel-inducing activity and choices. The question of whether to pursue an activity-based model in practice often arises when both modelers and planners in the jurisdiction concur that current analysis tools (typically traditional trip-based models) are not sufficiently sensitive to new and emerging policy and policy questions.")]),e._v(" "),a("p",[e._v("The decision to embark on activity-based model development should not be taken lightly. Defensible travel forecasting is a challenging endeavor regardless of the modeling framework, and the most complex models are going to be more difficult to use than simpler models from a variety of standpoints. Preparing input data, summarizing output data and executing the model certainly takes longer. But interpretation of ABM results is also more difficult because the causes and effects must be traced through a much longer chain of model elements; and like any modeling system, a full awareness of all the dynamics at work within the procedures by any one person is impossible. Therefore, an analyst must often rely on abstract understanding of the model formulation and on interpretive value judgments to explain the results. Highly disaggregate models also require more care during use. Despite the fact that ABMs are more theoretically defensible in principle, sloppy or uncertain execution will considerably undermine their usefulness and credibility in application.")]),e._v(" "),a("p",[e._v("This challenge is not unique to the discussion of Trip-based versus Activity-based models. Many quick-response urban planning tools are easier to explain than disaggregate travel demand models. Likewise, many of the input data formats are essentially the same between a TBM and ABM. The fact that the results are more complex and difficult to explain is a reflection of there being more complex relations to analyze and more difficult questions to answer.")]),e._v(" "),a("h3",{attrs:{id:"comparison-to-trip-based-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-to-trip-based-models"}},[e._v("#")]),e._v(" Comparison to Trip-Based Models")]),e._v(" "),a("p",[e._v("There is no reason to assert that activity-based models have an innate capacity to better replicate traditional metrics such as traffic counts or transit ridership than do trip-based models; either approach requires considerable effort in this area. The true advantage of the activity-based approach is that it is sensitive to a broader range of planning strategies and policies, particularly those that affect how individuals budget their time for activities and travel throughout the day.\nThere are also fundamental structural differences, both in data and procedures, between trip-based and activity-based models. The following properties of activity-based models are generally viewed as behavioral advantages, but many features may also be incorporated into standard trip-based models to improve their representation of travel behavior:")]),e._v(" "),a("ul",[a("li",[e._v("Consideration of individual households and persons within a household context;")]),e._v(" "),a("li",[e._v("Using tour concepts to portray how trips are organized and scheduled, recognizing the inter-trip dependence;")]),e._v(" "),a("li",[e._v("Spatial, temporal and modal consistency between trips made by the same person during the course of a day and within the same tour;")]),e._v(" "),a("li",[e._v("Motivation for travel in activity participation, thereby allowing substitution between travel and non-travel means of meeting personal and household needs;")]),e._v(" "),a("li",[e._v("Representation of both long-term and short-term decision perspectives;")]),e._v(" "),a("li",[e._v("Effects of accessibility on travel generation (e.g. congestion, urban form and activity opportunities); and")]),e._v(" "),a("li",[e._v("Simulation of the activity-travel decisions and schedules of individual households and of individual persons.")])]),e._v(" "),a("p",[e._v("With respect to those features unique to activity-based model design: (1) travel is organized into coherent tours, (2) each traveler can be identified throughout, (3) each traveler’s personal attributes inform unique choices, (4) the passage of time is accounted for, (5) uncertainty is allowed and, (6) data organization is flexible. These are discussed in further detail below.")]),e._v(" "),a("h3",{attrs:{id:"travel-is-organized-into-coherent-tours"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travel-is-organized-into-coherent-tours"}},[e._v("#")]),e._v(" Travel is organized into coherent tours")]),e._v(" "),a("p",[e._v("Traditional models commonly include a discrete category of non-home-based trips that neither begin nor end at home; this technique does not require knowing the activity-stream in which the trip is occurring. Activity-based models overcome this limitation by chaining trips into tours that both start and end at home. The chaining of trips allows the models to respond more logically to changes in daily activity patterns. The model is also easier to explain when the model more closely replicates familiar behavior.")]),e._v(" "),a("h3",{attrs:{id:"each-traveler-can-be-identified-throughout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#each-traveler-can-be-identified-throughout"}},[e._v("#")]),e._v(" Each traveler can be identified throughout")]),e._v(" "),a("p",[e._v("In a trip-based model, the results of the demand models are sets of trip tables segmented by purpose and mode. In an activity-based model, the decisions of individual travelers are simulated, so the results of the demand models are a list of individual households, persons, tours, and trips that look similar to a fully enumerated household travel survey. The results can be reported across any number of dimensions. For example, it is possible to tabulate commuter rail riders by income, by age, by gender, by the number of trips on a tour, or by any other category included in the "),a("a",{attrs:{href:"Synthetic_Population"}},[e._v("synthetic population")]),e._v(" or in the results. The ability to tabulate the results in this way enhances the analyst’s ability to understand how projects and policies affect different categories of people.")]),e._v(" "),a("h3",{attrs:{id:"each-traveler-s-personal-attributes-inform-unique-choices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#each-traveler-s-personal-attributes-inform-unique-choices"}},[e._v("#")]),e._v(" Each traveler’s personal attributes inform unique choices")]),e._v(" "),a("p",[e._v("Traditional models either assume that all travelers have the same attributes, or segment these attributes by a limited number of discrete classes. In fact, many user attributes are continuously distributed across a range of values; most significantly the economic value placed by each individual on their time. Ignoring this variation in simulation leads to aggregation error, particularly where a relatively small change in the environment significantly affects the choice of a large number of travelers. Because activity-based models simulate individual travelers, each traveler can be assigned their individual choice attributes, thus achieving a more realistic continuous distribution. In addition, disaggregation allows for a more coherent accounting of the attributes themselves.")]),e._v(" "),a("h3",{attrs:{id:"the-passage-of-time-is-accounted-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-passage-of-time-is-accounted-for"}},[e._v("#")]),e._v(" The passage of time is accounted for")]),e._v(" "),a("p",[e._v("The framework of an activity-based model permits a more robust treatment of time. In application, the context of the trip is known in terms of what other activities happen before or after it. Also, the disaggregate framework allows for the consideration of individual activity durations. This is useful in peak spreading models, where for each trip a “preferred” departure time is selected. This then determines how much the traveler is willing to shift away from their preferred time to avoid congestion.")]),e._v(" "),a("h3",{attrs:{id:"uncertainty-is-allowed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uncertainty-is-allowed"}},[e._v("#")]),e._v(" Uncertainty is allowed")]),e._v(" "),a("p",[e._v("When random choice is included in a traditional model, a standard remedy involves utilizing mechanical techniques to ensure that the same random numbers are used for the comparable decision between scenarios. If this technique is employed, then all changes in the results will be a result of the changes in the inputs rather than changes to random numbers.")]),e._v(" "),a("p",[e._v('This remedy, however, masks the nature of randomness as a manifestation of real uncertainty about how individuals will react to future conditions. An alternative to searching for a single endogenous equilibrium within the model is to formulate a research hypothesis that asks: are the differences between "baseline" and "test" scenario within the margin of error of the model? The goal being to discover if the proposed project performs well no matter which random future comes to pass.')]),e._v(" "),a("h3",{attrs:{id:"data-organization-is-flexible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-organization-is-flexible"}},[e._v("#")]),e._v(" Data organization is flexible")]),e._v(" "),a("p",[e._v("One additional benefit of the activity-based modeling framework as it has developed is the natural extensibility of the data formats. Because of the disaggregate nature of these models, new descriptive variables can easily be added. The ability to ascribe attributes to individuals greatly enhances the range of planning strategies that can be tested. This is appealing when considering that many future policy objectives are as yet unknown.")]),e._v(" "),a("h2",{attrs:{id:"source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" Source")]),e._v(" "),a("p",[a("a",{attrs:{href:"NCHRP_Synthesis_406_Advanced_Practices_in_Travel_Forecasting__A_Synthesis_of_Highway_Practice"}},[e._v("NCHRP Synthesis 406: Advanced Practices in Travel Forecasting - A Synthesis of Highway Practice")]),e._v(" "),a("a",{attrs:{href:"The_ARC_and_SACOG_Experience_with_Activity_Based_Models__Synthesis_and_Lessons_Learned"}},[e._v("The ARC and SACOG Experience with Activity-Based Models - Synthesis and Lessons Learned")])])])}),[],!1,null,null,null);t.default=s.exports}}]);