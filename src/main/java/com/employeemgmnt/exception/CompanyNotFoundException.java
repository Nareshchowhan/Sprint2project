package com.employeemgmnt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(HttpStatus.NOT_MODIFIED)
public class CompanyNotFoundException extends RuntimeException {
	public CompanyNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public CompanyNotFoundException(String message) {
		super(message);

	}
}
