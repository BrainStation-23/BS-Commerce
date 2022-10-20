import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Headers,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { ProductService } from '../services';
import { RolesGuard } from 'src/guards/auth.guard';
import {
  BranchIdParamsDto,
  CreateProductDto,
  CreateProductErrorResponseDto,
  CreateProductSuccessResponseDto,
  DeleteProductErrorResponseDto,
  DeleteProductParamsDto,
  DeleteProductSuccessResponseDto,
  GetAllProductsErrorResponseDto,
  GetAllProductsQueryDto,
  GetAllProductsSuccessResponseDto,
  GetCustomerAllHomePageProductsErrorResponseDto,
  GetCustomerAllHomePageProductsSuccessResponseDto,
  GetCustomerAllProductsErrorResponseDto,
  GetCustomerAllProductsQueryDto,
  GetCustomerAllProductsSuccessResponseDto,
  GetCustomerProductByURLErrorResponseDto,
  GetCustomerProductByURLParamsDto,
  GetCustomerProductByURLSuccessResponseDto,
  GetCustomerProductErrorResponseDto,
  GetCustomerProductParamsDto,
  GetCustomerProductSuccessResponseDto,
  GetProductBySKUErrorResponseDto,
  GetProductBySKUParamsDto,
  GetProductBySKUSuccessResponseDto,
  GetProductCountErrorResponseDto,
  GetProductCountSuccessResponseDto,
  GetProductErrorResponseDto,
  GetProductParamsDto,
  GetProductsByConditionErrorResponseDto,
  GetProductsByConditionQueryDto,
  GetProductsByConditionSuccessResponseDto,
  GetProductSuccessResponseDto,
  UpdateProductDto,
  UpdateProductErrorResponseDto,
  UpdateProductParamsDto,
  UpdateProductsForBrandErrorResponseDto,
  updateProductsForBrandRequestDto,
  UpdateProductsForBrandSuccessResponseDto,
  UpdateProductSuccessResponseDto,
} from './dto';
import {
  GetCustomizedProductsErrorResponseDto,
  GetCustomizedProductsQueryDto,
  GetCustomizedProductsSuccessResponseDto,
} from './dto/customizedProduct.dto';

@ApiTags('Product API')
@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  // Customer
  @Get('customer/products')
  @ApiResponse({
    description: 'Get All Products Success Response',
    type: GetCustomerAllProductsSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get All Products Error Response',
    type: GetCustomerAllProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomerAllProducts(
    @Query() condition: GetCustomerAllProductsQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.productService.getCustomerProductsByCondition(condition);
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/product/:url')
  @ApiResponse({
    description: 'Get Single Product Success Response',
    type: GetCustomerProductByURLSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Single Product Error Response',
    type: GetCustomerProductByURLErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomerProductByURL(
    @Param() params: GetCustomerProductByURLParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.productService.getCustomerProductByURL(params.url);
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/products/:productId')
  @ApiResponse({
    description: 'Get Product Success Response',
    type: GetCustomerProductSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Product Error Response',
    type: GetCustomerProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomerProduct(
    @Param() params: GetCustomerProductParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getCustomerProduct(
      params.productId,
    );
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/home-page-products')
  @ApiResponse({
    description: 'Get All Home Page Products Success Response',
    type: GetCustomerAllHomePageProductsSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get All Home Page Products Error Response',
    type: GetCustomerAllHomePageProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomerHomePageProducts(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } =
      await this.productService.getCustomerAllHomePageProducts();
    res.status(code);
    return { code, ...response };
  }

  // Admin
  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Get('/products/:branchId')
  @ApiResponse({
    description: 'Get All Product Success Response',
    type: GetAllProductsSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get All Product Error Response',
    type: GetAllProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getAllProducts(
    @Param() params: BranchIdParamsDto,
    @Query() query: GetAllProductsQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { skip, limit } = query;
    const { code, ...response } = await this.productService.getAllProducts(
      params.branchId,
      {
        skip,
        limit,
      },
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Get('/products/:branchId/count')
  @ApiResponse({
    description: 'Get All Product Count Success Response',
    type: GetProductCountSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get All Product Count Error Response',
    type: GetProductCountErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getProductCount(
    @Param() params: BranchIdParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProductCount(
      params.branchId,
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Get('/products/:branchId/sku/:sku')
  @ApiParam({ name: 'sku' })
  @ApiResponse({
    description: 'Get Product by SKU Success Response',
    type: GetProductBySKUSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Product by SKU Error Response',
    type: GetProductBySKUErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getProductBySKU(
    @Param() branchParams: BranchIdParamsDto,
    @Param() params: GetProductBySKUParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProductBySKU(
      branchParams.branchId,
      params.sku,
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Get('/products/:branchId/condition')
  @ApiResponse({
    description: 'Get Products By Condition Success Response',
    type: GetProductsByConditionSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Products By Condition Error Response',
    type: GetProductsByConditionErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getProductsByCondition(
    @Param() branchParams: BranchIdParamsDto,
    @Query() condition: GetProductsByConditionQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.productService.getProductsByCondition(
        branchParams.branchId,
        condition,
      );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Get('/products/:branchId/:productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Get Product Success Response',
    type: GetProductSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Product Error Response',
    type: GetProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getProduct(
    @Param() branchParams: BranchIdParamsDto,
    @Param() params: GetProductParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProduct(
      branchParams.branchId,
      params.productId,
    );
    res.status(code);
    return { code, ...response };
  }

  @Post('product')
  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @ApiHeader({
    name: 'branchId',
  })
  @ApiResponse({
    description: 'Create Product Success Response',
    type: CreateProductSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Create Product Error Response',
    type: CreateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async addProduct(
    @Body() product: CreateProductDto,
    @Headers('branchId') branchId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.createProduct(
      product,
      branchId,
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Delete('/products/:branchId/:productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Delete Product Success Response',
    type: DeleteProductSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Delete Product Error Response',
    type: DeleteProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async deleteProduct(
    @Param() branchParams: BranchIdParamsDto,
    @Param() params: DeleteProductParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.deleteProduct(
      branchParams.branchId,
      params.productId,
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Patch('/products/:branchId/brand')
  @ApiResponse({
    description: 'Update Products For Brand Success Response',
    type: UpdateProductsForBrandSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Update Products For Brand Error Response',
    type: UpdateProductsForBrandErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async updateProductsForBrand(
    @Param() branchParams: BranchIdParamsDto,
    @Body() data: updateProductsForBrandRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { productIds, brandId } = data;
    const { code, ...response } =
      await this.productService.updateProductsForBrand(
        branchParams.branchId,
        productIds,
        brandId,
      );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @Patch('/products/:branchId/:productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Update Product Success Response',
    type: UpdateProductSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Update Product Error Response',
    type: UpdateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async updateProduct(
    @Param() branchParams: BranchIdParamsDto,
    @Param() params: UpdateProductParamsDto,
    @Body() product: UpdateProductDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.updateProduct(
      branchParams.branchId,
      params.productId,
      product,
    );
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/customize-home-page-products')
  @ApiResponse({
    description: 'Get Customized Products Success Response',
    type: GetCustomizedProductsSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Customized Products Error Response',
    type: GetCustomizedProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCustomizedProducts(
    @Query() condition: GetCustomizedProductsQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.productService.getCustomizedProducts(condition);
    res.status(code);
    return { code, ...response };
  }
}
