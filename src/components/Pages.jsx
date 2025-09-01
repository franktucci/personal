import {Container, Image, Stack, Button, Form, Badge, Dropdown, Collapse} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IconBrandLinkedin, IconBrandGithub, IconX, IconCirclePlus, IconArrowsDiagonal, IconArrowsDiagonalMinimize2, IconDeviceImac, IconDownload} from '@tabler/icons-react';
import PageTemplate from "./PageTemplate";
import Canvas from "./Canvas";
import Resume from "../Frank_Tucci_Resume.pdf";

const backgroundColor = "#071015";
const accentColor = "#326485";

export function HomePage() {
  return (
    <PageTemplate>
      <Stack direction="horizontal" className="flex-wrap flex-lg-nowrap reverse-flex" style={{gap:"3rem", rowGap:"2rem"}}>
        <Stack>
          <Image className="align-self-center" src="./frank.JPG" width="300px"/>
        </Stack>    
        <Stack className="flex-grow-1" style={{minWidth:"300px"}}> 
          <div>
            Hi! My name is <b>Frank</b>, and I am a <b>Software Support and Testing Engineer</b> in manufacturing ERP software. 
            I graduated with a B.S. in Computer Science from California Polytechnic State University (Cal Poly) in 2024 where I did research and club work in logistics. 
            You can navigate to all my goings-on through the tab bar above or links below.
          </div>
          <hr/>
          <div>
            I can often be seen surfing, hiking, drawing, and playing Dungeons & Dragons and poker. In doing so, I have met friends who have changed my life for the better and reminded me that the world is a gentle one.
          </div>
          <hr/>
          <Stack direction="horizontal" className="justify-content-center mb-3">
            <Button className="me-5" size="lg" style={{background:accentColor, borderColor:accentColor, width:"10rem"}} href="https://www.linkedin.com/in/franktucci/">
              <Stack direction="horizontal" className="justify-content-center">
                <IconBrandLinkedin/>
                <div className="ms-2">LinkedIn</div>
              </Stack>
            </Button>
            <Button size="lg" style={{background:accentColor, borderColor:accentColor, width:"10rem"}}  href="https://github.com/franktucci">
              <Stack direction="horizontal" className="justify-content-center">
                <IconBrandGithub/>
                <div className="ms-2">GitHub</div>
              </Stack>
            </Button>
          </Stack>
          <div className="flex-grow-1"/>
          <p className="mb-0" style={{fontSize:10, lineHeight:"10px"}}>
            This website was programmed by me (a human) in ReactJS using Bootstrap components. See the source <a style={{color:accentColor}} href="https://github.com/franktucci/personal">here.</a>
          </p>
        </Stack>         
      </Stack>
    </PageTemplate>
  );
};

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filterList, setFilterList] = useState(new Set());
  const [filterListSize, setFilterListSize] = useState(0);
  const [hoveringOverClearBtn, setHoveringOverClearBtn] = useState(false);
  const [expandedList, setExpandedList] = useState(new Set());
  const [expandedListSize, setExpandedListSize] = useState(0);

  const projectsInfo = [
    {
      id: 0,
      title: "Bay Area Rapid Transit (BART) API Travel Scheduler", 
      blurb: "Travel app frontend that leverages several of BART's Legacy API endpoints to let a traveller know their optimal route, as well as associated fare, travel time, stop schedule, and any needed transfers.",
      tags: ["React", "JavaScript"],
      link: "#404",
      source: "#404"
    },
    {
      id: 1,
      title: "Time Tracking App", 
      blurb: "Full stack app where a user track their day, organized by customizable categories and displays them using a pleasant graphical interface.",
      tags: ["React", "JavaScript", "FastAPI", "Python", "PostgreSQL"],
      link: "#404",
      source: "#404"
    },
    {
      id: 2,
      title: "API suite for a Baseball Simulation Game", 
      blurb: "Project for a databases / data science class project. Plays simulated baseball games, returns a play-by-play feed of data in JSON format, and contains historical data from real-life players.",
      tags: ["FastAPI", "Python", "PostgreSQL"],
      source: "https://github.com/franktucci/basically-accurate-simulator-endpoints-for-ball"
    },
    {
      id: 3,
      title: "iFixit Shipping Facility Simulation Project",
      blurb: "Partnership between iFixit and an on-campus Industrial Engineering consulting club. Created a mock-up of current facility operations and used Java within an industrial engineering software to accurately simulate facility operations.",
      tags: ["Java"]
    },
    {
      id: 4,
      title: "Item Giveaway Website",
      blurb: "Full stack app to give away furnature and other items. Utilizes Google maps API to locate and display item listings graphically, and Google Firebase for user login authentication.",
      tags: ["React", "JavaScript", "NodeJS", "MongoDB"],
      source: "https://github.com/vilinh/free-stuff"
    }
  ]

  const additionalProjectsInfo = [
    <ul>
      <li className="mb-1">This travel-planner app uses data from the publically available <a style={{color:accentColor}} href="https://www.bart.gov/schedules/developers/api">Bay Area Rapid Transit (Bart) API</a>.</li>
      <li className="mb-1">A form on the homepage gives a traveller options to pick their route and arriving or departing time.</li>
      <li className="mb-1">The application calculates the best route, and display fare and station stop infomration based on the returned API information.</li>
      <li className="mb-1">A user is given the option to save their search to local storage to recall at a later time.</li>
      <li className="mb-1">Extra pages are reserved for station and advisory data.</li>
    </ul>,
    <ul>
      <li className="mb-1">A user is able to save and edit timecodes on the left hand side of the screen, and view a graphical layout of their day or week on the right hand side.</li>
      <li className="mb-1">Push a button to start or stop tracking, or to switch to another category.</li>
      <li className="mb-1">Uses React Frontend with Mantine components and a couple graphs in Recharts. FastAPI python backend that interfaces with PostgreSQL database.</li>
    </ul>,
    <ul>  
      <li className="mb-1">Lets a user call several API endpoints to upload and query real-life and fake, user-generated baseball teams and players.</li>
      <li className="mb-1">Python algorithm can generate realistic game data based on the statistical likelyhood of their events as per stored player statistics.</li>
    </ul>,
    <ul>
      <li className="mb-1">With iFixit and Cal Poly's Systems Optimization club, our group was tasked with providing workflow and ergonomic recommendations for the staging and shipping operations of a new fulfilment center.</li>
      <li className="mb-1">We designed a mock-up of their current facility operations, as well as the new facility. In the new facility mock-up, examined efficiency through different floor plan layouts and number of employee workstations using the AnyLogic Industrial Engineering program.</li>
      <li className="mb-1">Used Java to program actions of agents in the simulation, as well as statistical distrubutions based off of real-life shipments throughout the day.</li>
    </ul>,
    <ul>
      <li className="mb-1">User can submit a listing and has tags to choose from for quality of the item and category.</li>
      <li className="mb-1">Filter and sort options on the landing page pare down listings to the desired amount.</li>
      <li className="mb-1">Support for uploading photos of listings, as well as a public facing profile photo.</li>
    </ul>,
  ]

  const tags = {
    "React": "#069BCB",
    "JavaScript": "#EED31B",
    "FastAPI": "#06887B",
    "Python": "#2F618E",
    "PostgreSQL": "#4F2781",
    "Java": "#E21C24",
    "NodeJS": "#275D27",
    "MongoDB": "#00EA59"
  }
    
  useEffect(() => {
    setProjects(filterListSize === 0 ? projectsInfo : projectsInfo.filter(x => x.tags.some(tag => filterList.has(tag))));
  }, [filterListSize]);

  function handleBadgeClick(event) {
    filterList.add(event.target.id);
    setFilterListSize(filterList.size);
  }

  function handleBadgeCancel(_, tag) {
    filterList.delete(tag);
    setFilterListSize(filterList.size);
  }

  function handleFilterAddition(tag) {
    filterList.add(tag);
    setFilterListSize(filterList.size);
  }

  function handleFilterCancel() {
    filterList.clear()
    setFilterListSize(filterList.size);
  }

  function toggleCollapse(idx) {
    expandedList.has(idx) ? expandedList.delete(idx) : expandedList.add(idx);
    setExpandedListSize(expandedList.size);
  }

  const CustomToggle = React.forwardRef(({onClick}, ref) => (
    <div className="d-flex">
      <IconCirclePlus className="m-0 p-0" height="20px" width="20px" ref={ref} cursor="pointer" onClick={(e) => {e.preventDefault(); onClick(e);}}/>
    </div>)
  );

  return (
    <PageTemplate>
      <Collapse in={filterListSize > 0}>
        <div className="mb-3">
        <Stack direction="horizontal" className="flex-wrap flex-lg-nowrap" style={{rowGap:"5px"}}>
          <div onClick={handleFilterCancel} onMouseEnter={() => setHoveringOverClearBtn(true)} onMouseLeave={() => setHoveringOverClearBtn(false)}>
            {hoveringOverClearBtn ? <u style={{cursor:"pointer"}}><b className="me-2">Clear</b></u> : <b className="me-2">Clear</b>}
          </div>
          {Array.from(filterList).map(tag => <Badge key={tag} className="me-2" bg="" style={{background: tags[tag], cursor:"pointer"}} onClick={(event) => handleBadgeCancel(event, tag)}><Stack direction="horizontal" className="m-0"><IconX className="m-0" height="12px" width="12px"/><div className="ms-1">{tag}</div></Stack></Badge>)}
          <Dropdown onSelect={handleFilterAddition}>
            <Dropdown.Toggle className="m-0" as={CustomToggle}/>
            <Dropdown.Menu style={{background:backgroundColor}}>
              {Object.keys(tags).map(tag => <Dropdown.Item eventKey={tag} key={tag}><Badge bg="" style={{background: tags[tag]}}>{tag}</Badge></Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
        <hr/>
        </div>
      </Collapse>

      {projects.map(project => 
        <Stack key={project.id} className="gap-2">
          <Stack direction="horizontal" className="flex-wrap flex-lg-nowrap" style={{rowGap:"5px"}}>
            {project.tags.map(tag => <Badge key={tag} id={tag} className="me-2" bg={filterList.has(tag) || filterListSize === 0 ? "" : "secondary"} style={{background: tags[tag], cursor:"pointer"}} onClick={handleBadgeClick}>{tag}</Badge>)}
          </Stack>
          <div><b>{project.title}</b></div>
          <div>{project.blurb}</div>
          <Collapse in={expandedList.has(project.id)}>
            {additionalProjectsInfo[project.id]}
          </Collapse>
          <Stack className="mt-2" direction="horizontal">
            <Button className="me-3"style={{background:accentColor, borderColor:accentColor}} onClick={() => toggleCollapse(project.id)}>
                {expandedList.has(project.id) ? <IconArrowsDiagonalMinimize2 width="20px"/> : <IconArrowsDiagonal width="20px"/>}
            </Button>
            {project.source !== undefined && <Button className="me-3" href={project.source} style={{background:accentColor, borderColor:accentColor}}><Stack direction="horizontal" className="justify-content-center"><IconBrandGithub/><div className="ms-2">Source</div></Stack></Button>}
            {project.link !== undefined && <Button className="me-3" href={project.link} style={{background:accentColor, borderColor:accentColor}}><Stack direction="horizontal" className="justify-content-center"><IconDeviceImac/><div className="ms-2">Link</div></Stack></Button>}            
          </Stack>
          <hr/>
        </Stack>
      )}
    </PageTemplate>
  );
};

export function ResearchPage() {
  return (
    <PageTemplate>
      <div className="mb-3">The United States Department of Transportation publishes the <a style={{color:accentColor}} href="https://ops.fhwa.dot.gov/freight/freight_analysis/faf/">Freight Analysis Framework</a>, an analysis and estimate of the types, quantity, and methods of commodity transit every year in the United States. This information is grouped by census defined statistical areas for origin and destination, as well as the type of commodity and approximate tonnage and value.</div>
      <div className="mb-3">Our group used the NetworkX library in Python to create a directed graph of this data for domsetic, land-based trips.</div>
      <div className="mb-3">Next, we deveoped an algorithm to disrupt this network at random to simulate a route disruption (closed highway, for example) by removing one ground transport link at random, and re-routing affected traffic through the shortest next path.</div>
      <div className="mb-3">The before and after state of the graph can be stored and averaged together to see the routes which are most critical by looking at the strain imposed on neighboring routes.</div>
      <div className="mb-3">Intuitively, the regions most affected are densely traveled regions of the country, such as the East Coast, California, and Texas, especially where two heavily travelled trade corridors parallel one another.</div>
    </PageTemplate>
  )
}

export function WorkPage() {
  return (
    <PageTemplate>
      <div><i>Dassault Systèmes, Oct 2024-Present</i></div>
      <div className="mb-3"><b>User Success Engineer, DELMIAWorks (formerly IQMS)</b></div>
      <hr/>
      <div className="mb-3"><b>My job involves assisting customers with software funtionality and troubleshooting and reporting bugs for a mid-size manufacturing ERP software suite.</b></div>   
      <div className="mb-3">Some of the skills I've learned:</div> 
      <ul>
        <li className="mb-3">An understanding and appreciation of the inner-workings of manufacturing buisnesses: Sales and Purchase Order data entry, BOM creation, Work Order scheduling, costing, automatic email notification, and Engineering Change Orders (ECOs) and Corrective Action Reports (CARs).</li>
        <li className="mb-3">A heap of SQL to troubleshoot database issues in a customer environment, and modify and create fake data in a test environment to reproduce/document bugs.</li>
        <li className="mb-3">Planning <b>smart security roles</b> to help businesses make sure that their users can only access and modify information that they need to.</li>
        <li className="mb-3">Skills to create and modify <b>BI Dashboards and SAP Crystal Reports.</b></li>
      </ul>
    </PageTemplate>
  )
}

export function ResumePage() {
  return (
    <PageTemplate>
      <Stack>
        <a className="align-self-center mb-3" href={Resume} download="Frank_Tucci_Resume" target="_blank" rel="noreferrer">
          <Button style={{background:accentColor, borderColor:accentColor}}><Stack direction="horizontal" className="justify-content-center"><IconDownload/><div className="ms-2">Download</div></Stack></Button>
        </a>
        <div style={{width:"100%"}} className="d-flex align-self-center">
          <iframe src="./Frank_Tucci_Resume.pdf" style={{aspectRatio:.75}}/>
        </div>
      </Stack>
    </PageTemplate>
  )
}

export function FunPage() {
  const attributes = {
    "beak": 0,
    "belly": 1,
    "body": 2,
    "ears": 3,
    "eyes": 4,
    "horns": 5,
    "membrane": 6,
    "mouth": 7,
    "nose": 8,
    "nostril": 9,
    "sclera": 10,
    "spines": 11,
    "teeth": 12
  }
  const recentColorListSize = 18;

  const [colors, setColors] = useState(Array(13).fill("#ffffff"));
  const [attributeSelection, setAttributeSelection] = useState(Object.keys(attributes)[0]);
  const [counter, setCounter] = useState(0);
  const [stateForRecentColors, setStateForRecentColors]= useState(0);
  const [recentColorList, setRecentColorList] = useState([]);

  function handleColorChange(event) {
    changeColor(event.nativeEvent.target.value);
  }

  function changeColor(newColor) {
    const colorId = attributes[attributeSelection];
    colors[colorId] = newColor;
    document.getElementById("bodyColorSelector").value = newColor;
    setCounter(counter + 1);
    if (recentColorList.length !== 0 && recentColorList[recentColorList.length - 1].id === stateForRecentColors) {
      recentColorList[recentColorList.length - 1].color = newColor;
    }
    else {
      recentColorList.push({id: stateForRecentColors, color: newColor});
      if (recentColorList.length > recentColorListSize) {
        setRecentColorList(recentColorList.slice(1));
      }
    }
  }

  function handleSelectionChange(event) {
    const newAttribute = event.nativeEvent.target.value;
    setAttributeSelection(newAttribute);
    document.getElementById("bodyColorSelector").value = colors[attributes[newAttribute]];
    setStateForRecentColors(stateForRecentColors + 1);
  }

  function handleRecentColorSelection(event) {
    changeColor(event.target.id);
  }

  function handleDownload() {
    const canvas = document.getElementById("canvas");
    const image = canvas.toDataURL();
    const aDownloadLink = document.createElement("a");
    aDownloadLink.download = "dragon.png";
    aDownloadLink.href = image;
    aDownloadLink.click();
  }

  return (
    <PageTemplate>
      <Stack direction="horizontal" className="flex-wrap flex-lg-nowrap reverse-flex" style={{rowGap:"2rem"}}>
        <Stack className="flex-grow-1">
          <Container className="d-flex justify-content-center mb-3">
            <Canvas colors={colors} attributes={attributes} counter={counter} attributeSelection={attributeSelection}/>
          </Container>
          <Container className="d-flex justify-content-center">
            <Button style={{background:accentColor, borderColor:accentColor}} onClick={handleDownload}><Stack direction="horizontal" className="justify-content-center"><IconDownload/><div className="ms-2">Download</div></Stack></Button>
          </Container>
        </Stack>
        <Stack style={{width:"min-content"}}>
          <Container className="p-3" style={{backgroundColor:accentColor, borderRadius:"15px", maxWidth:"350px", width:"stretch"}}>
            <div style={{fontSize:30}} className="mb-3"><b>Dragon Designer</b></div>
            <Form>
              <Stack gap="3" direction="horizontal">
                <Form.Group className="mb-3 flex-grow-1" controlId="optionSelector" defaultValue={attributeSelection} onChange={handleSelectionChange}>
                  <Form.Label>Feature</Form.Label>
                  <Form.Select>
                    {Object.keys(attributes).map(x => <option>{x}</option>)}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bodyColorSelector">
                  <Form.Label>Color</Form.Label>
                  <Form.Control type="color" placeholder="color" defaultValue={colors[attributes[attributeSelection]]} onChange={handleColorChange}/>
                </Form.Group>
              </Stack>
            </Form>
            <div className="mb-3">Recents</div>
            <Stack direction="horizontal" className="justify-content-end gap-1 flex-wrap" style={{width:"fit-content", flexDirection:"row-reverse"}}>
              {recentColorList.map(x => <Badge id={x.color} bg="" style={{background:x.color, cursor:"pointer", width:"30px", height:"30px"}} onClick={handleRecentColorSelection}><div/></Badge>)}
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </PageTemplate>
  )
}

export function NotFoundPage() {
  return (
    <PageTemplate>
      <Stack>
        <span className="align-self-center" style={{fontSize:"200px"}}>404</span>
        <div className="align-self-center">not found.</div>
      </Stack>
    </PageTemplate>
  );
}
