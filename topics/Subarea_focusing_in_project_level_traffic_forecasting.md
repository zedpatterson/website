---
title: "Subarea focusing in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
---------

A subarea focused model resembles a regional model in structure and data, but it varies the level of spatial detail depending upon distance to the project. Subarea focusing may be accomplished by building a new model from scratch or adapting an existing regional model by adding detail near the project.

Background
----------

Subarea focusing was originally thought to be a sketch planning methodology to reduce computational effort and data requirements. More recently subarea focusing is thought to be a methodology for creating highly detailed networks for the area of influence of a project. The subarea network may contain items not seen in a typical regional models, such as roads of lower functional classes, private roads and driveways, explicit traffic controls, and small zones. For projects involving new development sites, zones may be even be smaller than a city block.

Guidelines
----------

There are three variations of this method, but all of these methods are similar in the level of detail contained within the subarea of the network.

-   *Enhanced Regional Model.* This method involves increasing the detail within a subarea on a previously prepared regional network. The new network is analyzed in much the same manner as the previous regional network. All trips in the region are simulated, with some trips passing through or stopping in the subarea. Such a model could be developed for highway projects or for site impact assessments.
-   *Custom Subarea Model.* This method develops a custom network and custom zone system. Spatial detail varies considerably with the distance from the project. Near the project zones are small and the density of links is high. Far away from the project or site development zones are huge, and links consist of only the most major arterials and freeways.
-   *Special Site Impact Assessment Model.* This method is similar to a custom subarea model, but only trips to and from the site are simulated. Networks developed for this type of model may omit links that are unlikely to be used by drivers coming and going from the site. The site may be represented by one or more zones, often one zone per parking lot driveway. Assessments of levels-of-service can be accomplished by adding site traffic to existing traffic levels.

Advice
------

There are advantages to each subarea model type.

-   An enhanced regional model is best when a validated regional model (along with its software platform) is currently available. It is also important that the regional modeling software platform has the capability for representing traffic controlled intersections within the subarea, should delays at traffic controlled intersection affect traffic assignments.
-   A custom subarea model is best when there are difficulties in enhancing a regional model or the regional model cannot be validated for project purposes. A custom subarea model is preferred if there is a need for traffic controlled intersections and those intersections would be difficult to implement within the regional model’s software. It is not an effective use of the analyst’s time to build a custom subarea model simply to speed up model execution.
-   A special site impact assessment model is best when traffic is such that reroutings of existing traffic are not expected because of added congestion from the site traffic.

Any of these model types can be used for site impact assessment. Site impact assessment would likely depend upon specific trip generation rates from ITE Trip Generation (or similar document) and not default trip generation rates from a regional model. ITE Trip Generation rates are typically expressed in units of vehicle-trips/land-use-intensity-measure. Thus, site generated trips need to be converted to person trips for inclusion in a regional or custom model. A special site impact assessment model can deal exclusively with vehicle trips.

The zone structures for custom networks could be adopted from a regional model or could be delineated specifically for the project. Census boundaries of various details (places, tracks, block groups) often work well when TAZs and unavailable or undesirable.

Enhanced Regional Models
------------------------

A complete methodology for enhancing regional models is found in NCHRP Report 765; this section will provide general and local-optional guidelines. An enhanced regional model may be used for highway project or for site impact assessments. Subareas for site impact assessments have these elements:

-   Network detail is increased in or near the site. If possible, traffic controls should be faithfully represented at intersections in or near the site.
-   Centroids are added to represent the site, even if there is already a TAZ covering the area of the site. There should be one centroid for each parking lot entrance for the site.
-   Productions and attractions for the site centroids are given in the same units as the original model, usually person trip over 24 hours. Productions and attractions should be consistent with site trip generation rates from ITE Trip Generation (or similar), recognizing that ITE Trip Gelocalneration gives rates in units of vehicle trips. Productions and attractions should be allocated across parking lots considering variations in land uses within the site. All parking lots serve all land uses in the site, the productions and attractions should be allocated according to the number of spaces. Vehicle trips may be converted to person trips by multiplying by the automobile occupancy factor for the trip purpose. Default automobile occupancy factors may be found in NHCRP Report 716 and NCHRP Report 365.
-   The model should run through equilibrium traffic assignment until a reasonable level of convergence is reached. Since site impact assessments are often particularly concerned with the amount of delay at intersections and since delay can be highly sensitive to variations in traffic volumes, it is important that equilibrium traffic assignment converge to a good precision, such as 10 vehicles per hour or less on link volumes. The measure of convergence found in many software platforms, relative gap, tends to overstate the quality of convergence and should not be used as a sole indicator of traffic assignment precision. There are several methods of equilibrium traffic assignment, although not all methods work well on all networks. If a network has multiple vehicle classes, feedback or traffic controls, then equilibrium should be achieved using the method of successive averages (MSA).

For site impact assessments, consideration should be given to increasing the number of productions elsewhere on the network to be consistent with the increase in number of attractions at the site. Since many regional models balance attractions to match productions, adding attractions does not necessarily increase the total number of trips on the network.
Subareas for site impact assessments have these elements:

-   It is likely that TAZs are too large near the highway project. Thus, consideration should be given to subdividing TAZs in the subarea in order to increase spatial precision.
-   If the project involves improvements that involve local streets or collectors (such as an access management project), then consideration should be given to adding links for these lower functional classes within the subarea.
-   If the project involves surface arterial streets, then the network should be upgraded within the subarea to correctly represent traffic controls, particularly signals, two-way stops, and all-way stops. Delays within the subarea should be calculated according to good traffic engineering principles, such as those in the Highway Capacity Manual.

Custom Subarea Focused Models
-----------------------------

A complete methodology for custom subarea focused models is found in NCHRP Report 765; this section will provide general and local-optional guidelines. Custom subarea focused models serve the same purposes as enhanced regional models, so guidelines are similar (refer to previous section.) In addition, the following items are characteristics of a good custom subarea focused model.

-   The custom subarea focused model spans the whole region. It includes external stations at major entry points at the boundary of the region. TAZs cover the region. All TAZs must be connected through the highway network.
-   Zones may be very large at long distances from the subarea. Within the subarea, zones are small. Zone sizes should be roughly in proportion to the probability that a trip from that zone uses highway segments in the project.
-   The network outside the subarea should consist of freeways and major arterials, only. Because many roads may be omitted from the region, loadings on the network outside of the subarea will be unrealistically large in places. Thus, links outside of the subarea should not be capacity restrained.
-   Links within the subarea should be capacity restrained. Delays on roads and at intersections within the subarea should be calculated according to good traffic engineering principles, such as those from the Highway Capacity Manual.

Special Site Impact Models
--------------------------

A complete methodology for special site impact models is found in NCHRP Report 765; this section will provide general and local-optional guidelines. A special site impact model has these required or desirable elements.

-   The network should contain all roads in and near the site and all major roads that provide paths to and from the site.
-   The site should be sufficiently small such that it does not have a significant amount of internal traffic. Thus, all traffic goes between zones within the site and zones that are off the site. It is still possible to have traffic on roads that are part of the site, but no vehicles may make two stops within the site.
-   All generated traffic is produced at the site. Trip productions should be spread across all site zones. Unless circumstances warrant another way of allocating productions, the preferred methods is to allocate in proportion to the number of parking spaces represented by each zone.
-   All generated traffic is attracted to off-site zones. There is no easy way to ascertain the number of site trips that go to any given off-site zone, so it is necessary to create an index of off-site zone attractiveness representing the amount of pull each zone has. Trip attractiveness is often related to the characteristics of the population of the off-site zone, when the site mostly contains employers. Unless circumstances warrant another way of measuring attractiveness, follow these rules.
    -   For retail and/or employment at the site, use population, households, or dwelling units as the measure of zonal attractiveness.
    -   For nonretail (nonservice) employment at the site, use employment at the residence as the measure of zonal attractiveness.
    -   For housing at the site, split trips into two purposes: HBW and HBNW. Use the trip attraction equations for HBW and HBNW from NCHRP Report 716 or NCHRP Report 365. The site trips may be split using default data from NCHRP Report 365 to reflect the relative proportion of these trip purposes for the site.
-   Off-site zones may range considerably in size and may be quite large at long distances from the site. Zone boundaries should be drawn such that there is only one logical path between the zone and the site.
-   Site traffic is distributed to off-site zones and vice versa. A singly constrained gravity equation or destination choice equation may be used. These two techniques are essentially identical when the gravity equation’s friction factor function is negative exponential. If a gravity equation is used, adjust parameter(s) of the gravity equation to match average trip length (in time units) on the ground for those types of trips. With an exponential friction factor function, start with a gravity equation parameter equal to the reciprocal of the average trip length (in time units), then adjust.
-   Time-of-day and directional split factors may be handled in one of two means: pre-distribution or pre-assignment. For pre-distribution time-of-day factoring, use the trip rates and directional splits for the land use(s) directly from ITE Trip Generation (or similar document), as given for the time period of the analysis. For pre-assignment factoring, use full-day trip rates, then factor those rates into the time period of analysis with data from NCHRP Report 716 (or similar), “auto modes”, for each trip purpose.
-   Vehicle trips from and to the site should have their productions allocated across all zones representing the site, usually parking lot driveways. Allocation by size of lot assumes that the site is well designed and the lot sizes and entrances have been placed to reflect where people prefer to park.
-   Assignments are all-or-nothing (AON), since traffic volumes only contain only site traffic. Existing movement delays are recommended as initial turn penalties for intersections near the site, so traffic assignments will reflect path choice on the basis of currently experienced delays.
-   Optionally, it may be possible to include traffic controls to enable the ability to estimate delays when traffic is composed of both site traffic and background traffic. Software must have the capability to combine assigned turning movements with background turning movements.
-   Pass-by traffic should, preferably, be removed from the background traffic before computation of delays.
-   One optional iteration of “iterative capacity restraint traffic assignment” may reveal the tendency for rerouting of traffic due to delays from site traffic. Once site traffic has been assigned to the network, this procedure requires that turning movement delays incorporate both site and background traffic. An AON assignment with these combined delays will reveal whether there will be significant rerouting of site traffic due to the addition of site traffic to the street system. It is not usually possible to do an effective equilibrium traffic assignment while only allowing site traffic to change routes, which is the situation with this type of model.

Items to Report
---------------

-   Traffic volumes on all streets surrounding the project or site.
-   Turning movements at all major intersections near the project or site.
-   Anticipated delays at all major intersections near the project or site.

References
----------

NCHRP Report 765 and ITE Trip Generation, NCHRP Report 365, NCHRP Report 716.

