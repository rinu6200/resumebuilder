import React, { useState } from "react";
import Resume from "../Resume/Resume";


function Sixth() {

    return (
        <>

            <div className="p-md-5 p-3">
                <h3 className="mb-0">Let’s Finalize!</h3>
                <p className="small text-muted mb-5">Review, edit and download your resume. You can always make more changes later.</p>

                <Resume />


            </div>
        </>
    )
}

export default Sixth
