import { queryArticles, createArticle, updateArticle, deleteArticle } from '@/services/api'

export default {
  namespace: 'articles',

  state: {
    data: {
      results: [],
      count: undefined,
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryArticles, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *create({ payload, articleID }, { call, put }) {
      yield call(createArticle, payload, articleID);
    },
    *update({ payload, articleID }, { call, put }) {
      yield call(updateArticle, payload, articleID);
    },
    *delete({ payload, articleID }, { call, put }) {
      yield call(deleteArticle, articleID);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
