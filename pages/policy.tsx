import Layout from "@/components/layout";
import { ReactElement, Fragment } from "react";

export default function Policy(): ReactElement {
  return (
    <Layout>
      <h2>Chính sách quyền riêng tư</h2>
      <ul>
        <li>
          <h3>Khái niệm cơ bản</h3>
          <p>
            Chúng tôi thu thập thông tin về tất cả những người sử dụng trang web
            này trong quyền hạn mà người dùng cung cấp. Thông tin thu thập được
            sẽ được xử lý phù hợp trong phạm vi mục đích sử dụng.
          </p>
        </li>
        <li>
          <h3>Phạm vi thông tin thu thập</h3>
          <ul>
            <li>
              Trang web này tự động thu thập thông tin như tên miền Internet,
              địa chỉ IP và trình duyệt trang web này. Cookies (thông tin được
              gửi từ máy chủ đến trình duyệt của người dùng và được lưu trữ trên
              máy tính của người dùng để xác định người dùng ở phía máy chủ)
              không được sử dụng.
            </li>
            <li>
              Khi sử dụng Góc Yêu cầu Ý kiến, chúng tôi yêu cầu bạn nhập ý kiến
              ​​và yêu cầu của mình. Ngoài ra, chúng tôi yêu cầu bạn tự nguyện
              đăng ký tuổi, nghề nghiệp (sau đây gọi là "thuộc tính người dùng")
              và địa chỉ email.
            </li>
          </ul>
        </li>
        <li>
          <h3>Mục đích sử dụng</h3>
          <p>
            Thông tin được thu thập sẽ được sử dụng làm tài liệu tham khảo cho
            hoạt động trơn tru của các dịch vụ do trang web này cung cấp.
          </p>
        </li>
        <li>
          <h3>Phạm vi ứng dụng</h3>
          <p>Chính sách bảo mật này chỉ áp dụng cho trang web này.</p>
        </li>
      </ul>
      <div>
        <p>[Liên hệ]</p>
        <p>Người phụ trách: Lê Huy Điệp</p>
        <p>Tel: +81 80 4285 1990</p>
        <p>Email: diep.le@0004s.com</p>
      </div>
    </Layout>
  );
}
