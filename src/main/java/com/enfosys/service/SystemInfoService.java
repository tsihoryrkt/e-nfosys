package com.enfosys.service;

import org.springframework.stereotype.Service;

import java.net.InetAddress;
import java.net.UnknownHostException;

@Service
public class SystemInfoService {

    public String getHostname() throws UnknownHostException {
        return InetAddress.getLocalHost().getHostName();
    }
}
