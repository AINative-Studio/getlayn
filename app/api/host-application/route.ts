import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Format the email content
    const emailContent = `
New Host Application Received
=============================

HOST INFORMATION
---------------
Host Type: ${formData.hostType}
Name: ${formData.name || 'Not provided'}
Email: ${formData.email}

PROPERTY DETAILS
---------------
Number of Properties: ${formData.numberOfProperties}
Address: ${formData.properties[0].address}
Number of Spaces: ${formData.properties[0].spaces}
Type: ${formData.properties[0].type}

EV CHARGING
-----------
Has EV Charging Equipment: ${formData.hasEvCharging || 'Not specified'}
Open to Sharing Charger: ${formData.openToSharingCharger || 'N/A'}
Interest in Adding EV Charging: ${formData.evChargingInterest || 'Not specified'}

AVAILABILITY
-----------
Days Available: ${formData.daysAvailable.join(', ') || 'Not specified'}
Hours Available: ${formData.hoursAvailable.join(', ') || 'Not specified'}
Booking Types: ${formData.bookingType.join(', ') || 'Not specified'}

MOTIVATION & GOALS
-----------------
Main Reason: ${formData.mainReason}
Income Range: ${formData.incomeRange}
What Would Make Hosting Easier: ${formData.hostingEasier || 'Not provided'}

BARRIERS & CONCERNS
------------------
Concerns: ${formData.concerns.join(', ') || 'None selected'}
Listed Before: ${formData.listedBefore}
What Stopped Them: ${formData.whatStopped || 'N/A'}

TRUST & SUPPORT
--------------
Insurance Importance: ${formData.insuranceImportance[0]}/5
Guest Respect Confidence: ${formData.guestRespectConfidence[0]}/5

FOLLOW-UP
--------
Beta Access: ${formData.betaAccess}

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    try {
      await resend.emails.send({
        from: 'Layn <onboarding@resend.dev>',
        to: 'isaac@getlayn.com',
        subject: `New Host Application - ${formData.name || formData.email}`,
        text: emailContent,
      });

      console.log('✅ Email sent successfully to isaac@getlayn.com');
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
      // Still return success to user even if email fails
      // You might want to log this to a monitoring service
    }

    // Optional: Save to database using ZeroDB
    /*
    import { zerodb } from '@/lib/db/zerodb';
    await zerodb.insert('host_applications', {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    });
    */

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error processing host application:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process application',
      },
      { status: 500 }
    );
  }
}
