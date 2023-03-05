import { AxiosRequestConfig } from 'axios'
import {
  DefaultBodyType,
  MockedRequest,
  ResponseResolver,
  rest,
  RestContext,
  RestHandler,
  RestRequest,
} from 'msw'

// Aspidaで生成されるMethods型を模倣したもの。型をキャプチャするために用意
type Method = {
  reqMethod: any
  query: any
  status: number
  resBody: any
  reqBody: any
}

type MethodNames = 'get' | 'post' | 'put' | 'delete'
type Methods = { [K in MethodNames]: Method }
type MethodTypes = {
  GET: {
    get: (option: {
      body: Methods['get']['reqBody']
      query: Methods['get']['query']
      config?: AxiosRequestConfig
    }) => Promise<Methods['get']['resBody']>
    $path: () => string
  }
  POST: {
    post: (option: {
      body: Methods['post']['reqBody']
      query: Methods['post']['query']
      config?: AxiosRequestConfig
    }) => Promise<Methods['post']['resBody']>
    $path: () => string
  }
  PUT: {
    put: (option: {
      body: Methods['put']['reqBody']
      query: Methods['put']['query']
      config?: AxiosRequestConfig
    }) => Promise<Methods['put']['resBody']>
    $path: () => string
  }
  DELETE: {
    delete: (option: {
      body: Methods['delete']['reqBody']
      query: Methods['delete']['query']
      config?: AxiosRequestConfig
    }) => Promise<Methods['delete']['resBody']>
    $path: () => string
  }
}

type A1<T> = T extends (a1: infer I) => unknown ? I : never

// Aspidaの型をキャプチャするUtil関数
export const restMock = {
  get: <T extends MethodTypes['GET']>(
    api: T,
    resolver: ResponseResolver<
      RestRequest<A1<T['get']>['body']>,
      RestContext,
      Awaited<ReturnType<T['get']>>['body']
    >,
  ): RestHandler<MockedRequest<DefaultBodyType>> => {
    return rest.get(api.$path(), resolver)
  },
  post: <T extends MethodTypes['POST']>(
    api: T,
    resolver: ResponseResolver<
      RestRequest<A1<T['post']>['body']>,
      RestContext,
      Awaited<ReturnType<T['post']>>['body']
    >,
  ): RestHandler<MockedRequest<DefaultBodyType>> => {
    return rest.post(api.$path(), resolver)
  },
  put: <T extends MethodTypes['PUT']>(
    api: T,
    resolver: ResponseResolver<
      RestRequest<A1<T['put']>['body']>,
      RestContext,
      Awaited<ReturnType<T['put']>>['body']
    >,
  ): RestHandler<MockedRequest<DefaultBodyType>> => {
    return rest.put(api.$path(), resolver)
  },
  delete: <T extends MethodTypes['DELETE']>(
    api: T,
    resolver: ResponseResolver<
      RestRequest<A1<T['delete']>['body']>,
      RestContext,
      Awaited<ReturnType<T['delete']>>['body']
    >,
  ): RestHandler<MockedRequest<DefaultBodyType>> => {
    return rest.delete(api.$path(), resolver)
  },
}
