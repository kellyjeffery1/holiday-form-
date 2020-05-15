// import React from 'React';
import React from 'react';

function Form(props) {
	return (
		<div className="holiday-form">
			<form>
				<div className="item-align">
					<div className="first-itembox">
						<input
							placeholder="first name"
							name="firstName"
							onChange={props.handleChange}
							value={props.data.firstName}
							type="text"
						/>
						<br />
						<input
							placeholder="last name"
							name="lastName"
							onChange={props.handleChange}
							value={props.data.lastName}
							type="text"
						/>
						<br />
						<input
							placeholder="age"
							name="age"
							type="number"
							onChange={props.handleChange}
							value={props.data.age}
						/>
						<br />

						<label>
							Gender:
							<input
								placeholder="gender"
								name="gender"
								type="radio"
								onChange={props.handleChange}
								value="female"
								checked={props.data.gender === 'female'}
							/>
							female
							<br />
						</label>

						<label>
							<input
								placeholder="gender"
								name="gender"
								value="male"
								type="radio"
								checked={props.data.gender === 'male'}
								onChange={props.handleChange}
							/>
							male
						</label>
					</div>
					<div className="second-itembox">
						<div className="location">
							<label>Location: </label>
							<select name="location" onChange={props.handleChange} value={props.data.location}>
								<option value=""> -- location --</option>
								<option value="Portugal">Portugal</option>
								<option value="Berlin">Berlin</option>
								<option value="Amseterdam">Amsetrdam</option>
								<option value="New York">New York</option>
								<option value="Australia">Australia</option>
							</select>
						</div>

						<div className="dietary">
							<label>Dietary Requirments: </label>
							<label>
								<input
									placeholder="dietary"
									name="dietary"
									type="radio"
									value="gluten"
									checked={props.data.dietary === 'gluten'}
									onChange={props.handleChange}
								/>
								gluten
							</label>
							<label>
								<input
									placeholder="dietary"
									name="dietary"
									type="radio"
									value="nuts"
									checked={props.data.dietary === 'nuts'}
									onChange={props.handleChange}
								/>
								nuts
							</label>
							<label>
								<input
									placeholder="dietary"
									name="dietary"
									type="radio"
									value="egg"
									checked={props.data.dietary === 'egg'}
									onChange={props.handleChange}
								/>
								egg
							</label>
							<label>
								<input
									placeholder="dietary"
									name="dietary"
									type="radio"
									value="other"
									checked={props.data.dietary === 'other'}
									onChange={props.handleChange}
								/>
								other
							</label>
							<label>
								<input
									placeholder="dietary"
									name="dietary"
									type="radio"
									value="none"
									checked={props.data.dietary === 'none'}
									onChange={props.handleChange}
								/>
								none
							</label>
							<div className="other">
								<textarea value={'please state other'} onChange={props.handleChange} type="textarea" />
							</div>
						</div>
					</div>
				</div>
				<br />
			</form>
		</div>
	);
}
export default Form;
