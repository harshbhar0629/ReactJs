/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { page, handlePage, totalPages } = useContext(AppContext);
	return (
		<div>
			<div>
        {
          page > 1 &&
          <button onClick={() => (handlePage(page-1))}>Previous</button>
        }
        {
          page < totalPages &&
          <button onClick={() => (handlePage(page+1))}>Next</button>
        }
      </div>
      <p>Page {page} of {totalPages}</p>
		</div>
	);
}

export default Footer;
