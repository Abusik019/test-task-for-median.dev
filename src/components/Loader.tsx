"use client";

import { Spin } from 'antd';
import React from 'react';

function Loader() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Spin size="large" />
		</div>
	);
}

export default Loader;
