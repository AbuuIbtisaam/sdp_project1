import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import { mainListItems, secondaryListItems } from './listItems';
import { Link } from '@mui/material';
//import { DashboardNavbar } from './DashboardNavbar';

export const DashboardHome = () => {
  return (
    <>
    {/*<DashboardNavbar/>*/}
    <MDBContainer className='p-4 pb-2'>
        <MDBRow>        
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://cdn-icons-png.flaticon.com/512/2302/2302834.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Student</MDBCardTitle> 
                    <Link to ='../pages/Student' >      
                    <MDBBtn href='Student'>View</MDBBtn>
                    </Link> 
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard height= "100px" width="100px">
                <MDBCardImage src='https://files.gabbart.com/1914/img_pd_002716_rtqerd.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Staff</MDBCardTitle>        
                    <MDBBtn href='Staff'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://myauplifebook.aup.edu.ph/employee/login/img/attendance.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Attendence</MDBCardTitle>        
                    <MDBBtn href='Attendence'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://www.freepngimg.com/download/paper_sheet/50192-9-exam-image-hq-image-free-png.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Exams</MDBCardTitle>        
                    <MDBBtn href='Exams'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://cdn-icons-png.flaticon.com/512/562/562132.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Library</MDBCardTitle>        
                    <MDBBtn href='Library'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/6/3/638.12-calendar-icon-iconbunny.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Calender</MDBCardTitle>        
                    <MDBBtn href='Calender'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://thumbs.dreamstime.com/b/creative-medal-award-circular-icon-original-150970506.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Sports</MDBCardTitle>        
                    <MDBBtn href='Sports'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHjHXTiTvZOE018AeNIZWEORyLRpNaSZkSGMIqwGvaAhwBi1l0YyK9XzI9e1F3g_SbJ4&usqp=CAU' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Time Table</MDBCardTitle>        
                    <MDBBtn href='TimeTables'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/2/128.9-science-icon-iconbunny.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Inventory</MDBCardTitle>        
                    <MDBBtn href='Inventory'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pd-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuAjZQizEs_l1-WZDFFraYreQ1FobxJOjhNAppf0HquwU8Hn_VBGViosq_K9EMD5a3iM&usqp=CAU' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Transport</MDBCardTitle>        
                    <MDBBtn href='Transport'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard >
                <MDBCardImage src='https://cdn-icons-png.flaticon.com/128/2641/2641409.png' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Reports</MDBCardTitle>        
                    <MDBBtn href='Reports'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>
         <MDBCol sm='4' md='2' className='pb-2 text-center'>            
            <MDBCard>
                <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDssiOLOtoduT_VBocTGUGFU0zLizDRVRaWTnFaXlSCtQr_gSMX--nxHFmjBWp4NyKQ7g&usqp=CAUs' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Alumni</MDBCardTitle>        
                    <MDBBtn href='Alumini'>View</MDBBtn>
                </MDBCardBody>
            </MDBCard>
         </MDBCol>        
        </MDBRow>
    </MDBContainer>
    </>
  );
}