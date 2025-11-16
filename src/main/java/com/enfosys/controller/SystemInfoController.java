package com.enfosys.controller;

import com.enfosys.service.SystemInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class SystemInfoController {

    @Autowired
    private SystemInfoService systemInfoService;

    @GetMapping("/version")
    public String showing_version() {
        return "version of the application here";
    }

    @GetMapping("/system-info")
    public Map<String, String> getSystemInfo() throws UnknownHostException {
        Map<String, String> info = new HashMap<>();
        info.put("hostname", systemInfoService.getHostname());
        return info;
    }
}