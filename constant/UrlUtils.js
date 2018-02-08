/**
 * 存储url的工具类
 */

'use strict';

export default class UrlUtils {
    /**
     * IP地址，域名
     */
    static domain = 'http://116.228.114.190:8866';
    /**
     * 登录接口
     */
    static loginUrl = '/galaxy-sso-business/login';

    /**
     * 获取公司帐套.
     */
    static findCompanyUrl = "/galaxy-base-business/api/company/findCompany";

    /**
     * 获取公司帐套.
     */
    static biUrl = "/galaxy-mobile-bi-www/index";
    /**
     * 查询登录网点员工运单.
     */
    static  GET_USER_WAY_BILL_NUM = "/galaxy-waybill-business/api/waybill/queryWaybillByNo4App";

}


