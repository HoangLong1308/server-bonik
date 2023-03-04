package com.poly.datn.controller;

import com.poly.datn.dto.response.ProductStorageResponse;
import com.poly.datn.service.ProductStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

import static com.poly.datn.controller.router.Router.API.*;

@RestController
@RequestMapping(BASE)
@RequiredArgsConstructor
@Validated
public class ProductStorageController {
    private final ProductStorageService productStorageService;

    @GetMapping(PRODUCT + "-storage/{productId}/{colorId}")
    public ResponseEntity<List<ProductStorageResponse>>
    getProductStorageService(@PathVariable @Valid @NotNull Integer productId,
                             @PathVariable @Valid @NotNull Integer colorId) {
        return ResponseEntity.ok(productStorageService.getProductStorage(productId, colorId));
    }
}